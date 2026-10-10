import { PAGES, SITE } from "$lib/site";

// Generated from PAGES in $lib/site, so adding a route updates the sitemap
// automatically -- there is no hand-maintained list to forget.

const PRIORITY: Record<string, string> = { "/": "1.0", "/resume": "0.8", "/photos": "0.6" };

export const prerender = true;

function urlEntry(path: string) {
	return [
		"\t<url>",
		`\t\t<loc>${SITE.url}${path}</loc>`,
		"\t\t<changefreq>monthly</changefreq>",
		`\t\t<priority>${PRIORITY[path] ?? "0.5"}</priority>`,
		"\t</url>",
	].join("\n");
}

export function GET() {
	const urls = Object.keys(PAGES).map(urlEntry).join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
}
