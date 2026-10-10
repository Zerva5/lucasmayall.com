<script lang="ts">
	import { SITE } from "$lib/site";

	/**
	 * Renders the per-page head tags: title, description, canonical and the
	 * Open Graph set.
	 *
	 * Site-wide defaults (`og:site_name`, `og:image`, `twitter:card`) live in
	 * app.html so they are only declared once. Page copy comes from `PAGES` in
	 * `$lib/site`, and the canonical/og:url are derived from `SITE.url`, so no
	 * absolute URL is ever written by hand.
	 */
	let {
		title,
		description,
		path,
		type = "website",
		noindex = false,
	}: {
		title: string;
		description: string;
		path: string;
		type?: string;
		noindex?: boolean;
	} = $props();

	const canonical = `${SITE.url}${path}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content={SITE.locale} />
</svelte:head>
