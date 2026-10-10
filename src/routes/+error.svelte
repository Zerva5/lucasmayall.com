<script lang="ts">
	import { page } from "$app/state";
	import Seo from "$lib/components/Seo.svelte";
	import { NAV_LINKS, SITE } from "$lib/site";
</script>

<Seo
	title={`${page.status} | ${SITE.name}`}
	description="The page you were looking for doesn't exist."
	path={page.url.pathname}
	noindex
/>

<div class="error-page">
	<h1>
		{#if page.status === 404}
			Oops, looks like you're in the wrong place
		{:else}
			Something went wrong
		{/if}
	</h1>

	<p class="blurb">
		{#if page.status === 404}
			This page doesn't seem to exist. It may have moved, or the link might be a little off.
		{:else}
			{page.error?.message ?? "An unexpected error occurred."}
		{/if}
	</p>

	<nav>
		{#each NAV_LINKS as link (link.href)}
			<a href={link.href}>{link.label}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.error-page {
		max-width: 34rem;
		margin: 0 auto;
		padding: 4rem 1.5rem;
		text-align: center;
	}

	h1 {
		margin: 0 0 1rem;
		font-size: 1.6rem;
		font-weight: 600;
	}

	.blurb {
		color: var(--color-muted);
		margin: 0 0 2rem;
		font-size: 1.05rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 1.5rem;
	}
</style>
