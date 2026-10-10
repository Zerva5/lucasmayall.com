/**
 * Generates the resume PDF from src/lib/resume/resume.json.
 *
 * `resume.json` is the single source of truth for both the PDF (this script)
 * and the HTML resume page (src/routes/resume/+page.svelte). Editing the
 * resume means editing the JSON and re-running `npm run build`.
 *
 * Requires a LaTeX installation (pdflatex).
 */

import { readFile, writeFile, mkdir, rm, copyFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { writeResumeStamp } from "./check-resume-freshness.mjs";

const run = promisify(execFile);

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..");

// The JSON lives under src/ so SvelteKit can import it as a module.
const jsonPath = join(repoRoot, "src", "lib", "resume", "resume.json");
const outDir = join(repoRoot, "static");
const workDir = join(repoRoot, ".resume-build");

/**
 * Render an entry's date range for the PDF. The JSON stores `start` and `end`
 * separately so each output can format them differently; here that means a
 * LaTeX en dash, with `end: null` meaning "Present".
 */
function renderPeriod(entry) {
	const start = tex(entry.start);
	if (entry.end === null || entry.end === undefined) {
		return `${start} \\textendash{} Present`;
	}
	return `${start} \\textendash{} ${tex(entry.end)}`;
}

/** Escape the characters that are special in LaTeX. */
function tex(value) {
	return String(value)
		.replace(/\\/g, "\\textbackslash{}")
		.replace(/([&%$#_{}])/g, "\\$1")
		.replace(/~/g, "\\textasciitilde{}")
		.replace(/\^/g, "\\textasciicircum{}")
		.replace(/--/g, "\\textendash{}");
}

const PREAMBLE = String.raw`
\documentclass[letterpaper,10.5pt]{article}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.1in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Keeps the generated PDF machine readable / ATS parsable.
\pdfgentounicode=1

\newcommand{\resumeItem}[1]{\item{#1}}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small#4} \\
    \end{tabular*}\vspace{-4pt}
}

\newcommand{\resumeSubheadingShort}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0pt, label={}, rightmargin=0pt]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
`;

function renderSection(section) {
	const out = [`\\section{${tex(section.heading)}}`];

	if (section.groups) {
		// Each row closes its own brace, and is joined to the next with a LaTeX
		// row break. The final row gets no row break.
		const lines = section.groups.map(
			(group) => `     \\textbf{${tex(group.label)}}{: ${group.items.map(tex).join(", ")}}`,
		);

		out.push(" \\begin{itemize}[leftmargin=0in, label={}]");
		out.push("    \\small{\\item{");
		out.push(lines.join(" \\\\\n"));
		out.push("    }}");
		out.push(" \\end{itemize}");
		return out.join("\n");
	}

	const short = section.id === "education";
	out.push("  \\resumeSubHeadingListStart");
	for (const entry of section.entries) {
		const cmd = short ? "resumeSubheadingShort" : "resumeSubheading";
		out.push(`  \\${cmd}`);
		out.push(`    {${tex(entry.role)}}`);
		out.push(`    {${renderPeriod(entry)}}`);
		out.push(`    {${tex(entry.organisation)}}`);
		out.push(`    {${tex(entry.location)}}`);

		if (entry.bullets?.length) {
			out.push("    \\resumeItemListStart");
			for (const bullet of entry.bullets) {
				out.push(`      \\resumeItem{${tex(bullet)}}`);
			}
			out.push("    \\resumeItemListEnd");
		}
	}
	out.push("  \\resumeSubHeadingListEnd");

	if (section.id === "experience") out.push("\\vspace{-18pt}");
	return out.join("\n");
}

function renderBody(resume) {
	const parts = ["\\begin{document}", "\\begin{center}"];

	parts.push(`    \\textbf{\\Huge \\scshape ${tex(resume.name)}} \\\\ \\vspace{1pt}`);

	const links = resume.contact.map((c, i) => {
		const body = `\\underline{${tex(c.label)}}`;
		const withHref = c.href ? `\\href{${c.href}}{${body}}` : body;
		// Separators between contact entries, none after the last.
		return i === resume.contact.length - 1 ? withHref : `${withHref} $|$`;
	});
	parts.push(`    ${links.join(" ")}`);
	parts.push("\\end{center}");

	for (const section of resume.sections) {
		parts.push(renderSection(section));
	}

	parts.push("\\end{document}");
	return parts.join("\n\n");
}

/**
 * Light structural validation. resume.schema.json is there for editor
 * autocomplete, but editors don't enforce it on build, so check the shape
 * here and fail loudly rather than emitting a broken PDF.
 */
function validate(resume) {
	const problems = [];
	const isStr = (v) => typeof v === "string" && v.length > 0;

	if (!isStr(resume?.name)) problems.push("`name` must be a non-empty string");

	if (!Array.isArray(resume?.contact) || resume.contact.length === 0) {
		problems.push("`contact` must be a non-empty array");
	} else {
		resume.contact.forEach((c, i) => {
			if (!isStr(c?.label)) problems.push(`contact[${i}].label must be a non-empty string`);
		});
	}

	if (!Array.isArray(resume?.sections) || resume.sections.length === 0) {
		problems.push("`sections` must be a non-empty array");
		return problems;
	}

	resume.sections.forEach((section, i) => {
		const where = `sections[${i}]`;
		if (!isStr(section?.id)) problems.push(`${where}.id must be a non-empty string`);
		if (!isStr(section?.heading)) problems.push(`${where}.heading must be a non-empty string`);

		if (Array.isArray(section?.groups)) {
			if (Array.isArray(section?.entries)) {
				problems.push(`${where} has both 'entries' and 'groups'`);
			}
			section.groups.forEach((g, j) => {
				if (!isStr(g?.label)) problems.push(`${where}.groups[${j}].label must be a string`);
				if (!Array.isArray(g?.items) || g.items.length === 0) {
					problems.push(`${where}.groups[${j}].items must be a non-empty array`);
				}
			});
			return;
		}

		if (!Array.isArray(section?.entries) || section.entries.length === 0) {
			problems.push(`${where} must have either 'entries' or 'groups'`);
			return;
		}
		section.entries.forEach((entry, j) => {
			for (const field of ["role", "start", "organisation", "location"]) {
				if (!isStr(entry?.[field])) {
					problems.push(`${where}.entries[${j}].${field} must be a non-empty string`);
				}
			}
			if (entry?.end !== undefined && entry.end !== null && !isStr(entry.end)) {
				problems.push(
					`${where}.entries[${j}].end must be a string or null (null = current)`,
				);
			}
			if (entry?.bullets !== undefined && !Array.isArray(entry.bullets)) {
				problems.push(`${where}.entries[${j}].bullets must be an array if present`);
			}
		});
	});

	return problems;
}

async function hasPdflatex() {
	try {
		await run("pdflatex", ["--version"]);
		return true;
	} catch {
		return false;
	}
}

async function main() {
	const resume = JSON.parse(await readFile(jsonPath, "utf8"));

	// Validate first, before the toolchain check. Validation is pure JSON, so it
	// costs nothing and must run everywhere -- including CI, where skipping the
	// PDF step is exactly when a malformed resume would otherwise ship unnoticed.
	const problems = validate(resume);
	if (problems.length > 0) {
		console.error("resume.json is invalid:\n  - " + problems.join("\n  - "));
		process.exitCode = 1;
		return;
	}

	// CI (Cloudflare Pages) has no LaTeX toolchain and can't install one, so the
	// committed static/resume.pdf is the source of truth there. Regenerating is a
	// local, deliberate step -- see the README.
	const skip = process.argv.includes("--if-available");
	if (skip && !(await hasPdflatex())) {
		console.log("pdflatex not found; keeping the committed static/resume.pdf");
		return;
	}

	await mkdir(workDir, { recursive: true });

	const texPath = join(workDir, "resume.tex");
	await writeFile(texPath, PREAMBLE + "\n" + renderBody(resume) + "\n", "utf8");

	// -interaction=nonstopmode so a LaTeX error doesn't hang on a prompt.
	try {
		await run("pdflatex", ["-interaction=nonstopmode", "-halt-on-error", "resume.tex"], {
			cwd: workDir,
		});
		await run("pdflatex", ["-interaction=nonstopmode", "-halt-on-error", "resume.tex"], {
			cwd: workDir,
		});
	} catch (err) {
		if (err?.code === "ENOENT") {
			console.error(
				"pdflatex not found. Install a LaTeX toolchain (Arch: `pacman -S texlive`,\n" +
					"Debian/Ubuntu: `apt install texlive-latex-base texlive-latex-recommended texlive-fonts-recommended texlive-latex-extra`),\n" +
					"or run `npm run build` instead, which uses the committed static/resume.pdf.",
			);
			process.exitCode = 1;
			return;
		}
		const output = `${err.stdout ?? ""}${err.stderr ?? ""}`;
		// Surface the actual LaTeX error, not just "command failed".
		const useful = output
			.split("\n")
			.filter((l) => /^!|^\s+\d+\s/.test(l))
			.slice(0, 20);
		console.error("pdflatex failed:\n" + (useful.join("\n") || output.slice(-2000)));
		process.exitCode = 1;
		return;
	}

	await copyFile(join(workDir, "resume.pdf"), join(outDir, "resume.pdf"));
	await rm(workDir, { recursive: true, force: true });

	// Record which JSON produced this PDF, so `npm run check` can verify the
	// committed file is current without relying on mtimes.
	await writeResumeStamp();

	console.log("static/resume.pdf generated from src/lib/resume/resume.json");
}

await main();
