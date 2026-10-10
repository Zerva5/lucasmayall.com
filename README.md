# lucasmayall.com

Personal site for [lucasmayall.com](https://lucasmayall.com) — an about page, a
resume, and wildlife photos.

Built with [SvelteKit](https://svelte.dev/docs/kit) 2 and Svelte 5, prerendered to static
HTML via `@sveltejs/adapter-static` and deployed to **Cloudflare Pages**.

## Getting started

```bash
npm install
npm run dev          # start the dev server
npm run check        # svelte-check + resume freshness + formatting
npm run check:watch  # svelte-check in watch mode
npm run format       # rewrite files with Prettier
npm run build        # prerender the site into ./build
npm run preview      # serve the production build locally
```

`npm run check` is the one to run before committing — it covers types, a11y,
unused CSS, a stale resume PDF, and Prettier formatting.

## Project layout

```
scripts/
  generate-resume-pdf.mjs     JSON -> LaTeX -> PDF generator
  check-resume-freshness.mjs  warns if the committed PDF is out of date
src/
  app.html                    shell document; site-wide meta defaults live here
  lib/
    site.ts                   canonical origin, page titles, nav and social links
    components/
      Seo.svelte              per-page <title>, description, canonical, Open Graph
      containers/             layout containers (HeroBox, MainContent)
      icons/                  inline SVG icons
      nav/                    NavBar, NavBarItem, MenuButton
    images/                   images imported through Vite (hashed + bundled)
    resume/
      resume.json             single source of truth for the resume
      resume.schema.json      editor validation
      resume.types.ts         TypeScript shape + shared date formatting
  routes/
    +layout.svelte            nav bar + footer shell
    +layout.js                prerender = true for every route
    +error.svelte             404 and error page
    styles.scss               design tokens and element defaults
    +page.svelte              home
    resume/+page.svelte       resume, rendered from $lib/resume/resume.json
    photos/+page.svelte       wildlife gallery
    sitemap.xml/+server.ts    generated from PAGES in site.ts
    robots.txt/+server.ts     generated from SITE.url in site.ts
static/                       copied verbatim to the site root (favicon, resume.pdf)
build/                        build output (gitignored)
```

### Adding a page

Add the route, then add it to `PAGES` in `src/lib/site.ts`. That single entry
updates the nav bar, the 404 page's links, the sitemap, and the page's head tags.
There is no second list to keep in sync.

### Styling

Design tokens (`--primary`, colours, fonts) live in `src/routes/styles.scss`,
which `+layout.svelte` imports once. Components consume them with
`var(--token)` and must not redeclare them, so a palette change is a one-line
edit. SCSS `$variables` are only for values local to a single component.

### Assets

Anything in `src/lib/images/` is imported through Vite, which fingerprints,
optimizes, and inlines small files. Files in `static/` are served as-is, so use
it for things that must keep a stable URL (the generated resume PDF,
`favicon.ico`).

### Images

Large photos are resized before committing to keep the repo small:

```bash
magick input.jpg -auto-orient -resize "2000x2000>" -strip -interlace Plane -quality 82 out.jpg
```

## Resume

`src/lib/resume/resume.json` is the **single source of truth** for the resume. Both outputs
are generated from it:

```
src/lib/resume/resume.json
  ├─> scripts/generate-resume-pdf.mjs ──> pdflatex ──> static/resume.pdf  (Download button)
  └─> src/routes/resume/+page.svelte ────> the HTML resume page
```

To update the resume, edit the JSON and run `npm run resume:pdf`. You never touch
the page component or the LaTeX template.

```bash
npm run resume:pdf   # regenerate static/resume.pdf (pdflatex must be installed)
npm run build        # regenerates the PDF, then builds the site
```

Notes:

- Entry dates are stored as `start` and `end` separately (`end: null` means the role is
  current). Each output formats the range its own way: the PDF uses a LaTeX en dash via
  `renderPeriod()` in `scripts/generate-resume-pdf.mjs`, and the web page uses `formatPeriod()`
  in `src/lib/resume/resume.types.ts`.
- The generated PDF keeps `\pdfgentounicode=1`, so its text stays extractable for applicant
  tracking systems (ATS). Don't remove it — many ATS tools silently reject PDFs they can't
  read.
- `src/lib/resume/resume.schema.json` gives editor autocomplete.
  `generate-resume-pdf.mjs` also validates the shape at build time and **fails the build**
  on a malformed resume, rather than emitting a broken PDF. Validation runs before the
  LaTeX toolchain check, so it also runs on CI.
- The LaTeX template lives in the `PREAMBLE` constant in
  `scripts/generate-resume-pdf.mjs`, derived from
  [sb2nov/resume](https://github.com/sb2nov/resume) (MIT).
- The build-time date in the footer comes from `vite.config.ts`.

### Committing the PDF

`npm run build` runs the PDF step with `--if-available`, which **skips it when
`pdflatex` isn't installed** and uses the committed `static/resume.pdf`. That
matters because Cloudflare Pages' build image has no LaTeX and can't install
one during a build, so the deployed PDF always comes from the committed file.

**So: after editing `resume.json`, run `npm run resume:pdf` and commit the
updated `static/resume.pdf` and its `resume.pdf.sha256` stamp.**

The stamp records a hash of the JSON the PDF was built from. `npm run check`
compares them and warns if they don't match. It uses a content hash rather than
file mtimes, so a fresh clone or `git checkout` doesn't produce false alarms.

Installing LaTeX locally:

```bash
# Arch
pacman -S texlive
# Debian / Ubuntu
apt install texlive-latex-base texlive-latex-recommended \
    texlive-fonts-recommended texlive-latex-extra
```

## Deploying

The site is deployed with **Cloudflare Pages**, connecting to the GitHub repo
(`Zerva5/lucasmayall.com`).

- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Root directory:** `/` (repo root)

No environment variables are required.

Cloudflare's build image has no LaTeX toolchain, so `npm run build` skips the resume PDF
step there and deploys the committed `static/resume.pdf`. Keep that file up to date — see
[Committing the PDF](#committing-the-pdf).

## Known limitations

- **The 404 page requires JavaScript.** `fallback: '404.html'` in `svelte.config.js`
  makes SvelteKit emit an SPA shell, so `+error.svelte` only renders after hydration.
  A visitor with JS blocked sees a blank page. Making it prerendered would mean
  serving a real static 404 instead.
- **Gallery images are not responsive.** `GalleryImage.svelte` serves ~2000px photos
  into 250–400px cells, so mobile downloads far more image than it displays.
