/**
 * Site-wide constants: everything that appears on more than one page.
 *
 * Having these in one module means adding a page is a one-line change here
 * rather than edits to the nav, the 404 footer links, four sets of head tags,
 * and the sitemap.
 */

export const SITE = {
	name: "Lucas Mayall",
	/** Canonical origin. Every canonical/og:url is built from this, so switching
	 *  domains is a one-line change. */
	url: "https://lucasmayall.com",
	locale: "en_US",
} as const;

export type PageMeta = {
	/** Written verbatim into <title> and og:title. */
	title: string;
	description: string;
	/** Open Graph type. Defaults to "website". */
	type?: string;
	/** Menu display text, may contain accents. */
	menu: string;
};

/** Every prerendered page, keyed by its route path. Nav order follows this. */
export const PAGES = {
	"/": {
		title: "Lucas Mayall | Full Stack Developer",
		description:
			"Lucas Mayall is a full stack developer in Kamloops, BC. He builds web applications with C#, Python, TypeScript, Svelte and React, and enjoys hiking, climbing and photography.",
		type: "profile",
		menu: "Home",
	},
	"/resume": {
		title: "Résumé | Lucas Mayall",
		description:
			"Resume of Lucas Mayall, a full stack developer in Kamloops, BC. Experience with C#, Python, TypeScript, Svelte, React, PostgreSQL and cloud infrastructure.",
		type: "profile",
		menu: "Résumé",
	},
	"/photos": {
		title: "Photos | Lucas Mayall",
		description: "Wildlife photos taken by Lucas Mayall around Kamloops, British Columbia.",
		menu: "Photos",
	},
} as const satisfies Record<string, PageMeta>;

export const NAV_LINKS = Object.entries(PAGES).map(([href, page]) => ({
	href,
	label: page.menu,
}));

export const SOCIALS = [
	{ href: "https://www.linkedin.com/in/lucas-mayall/", label: "LinkedIn", icon: "linkedin" },
	{ href: "https://github.com/Zerva5", label: "Github", icon: "github" },
	{ href: "mailto:talktome@lucasmayall.com", label: "Email", icon: "mail" },
] as const;

export type SocialIcon = (typeof SOCIALS)[number]["icon"];
