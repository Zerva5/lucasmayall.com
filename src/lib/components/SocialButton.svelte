<script lang="ts">
	import type { Snippet } from "svelte";

	let { href, label, children }: { href: string; label: string; children?: Snippet } = $props();

	const isExternal = href.startsWith("http") || href.startsWith("mailto:");
</script>

<a
	{href}
	aria-label={label}
	title={label}
	{...isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}}
>
	{@render children?.()}
</a>

<style lang="scss">
	a {
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		padding: 0.125rem;
		/* Explicit size rather than a percentage, so the button doesn't depend
		   on a parent having a definite height. */
		width: 2.5rem;
		height: 2.5rem;
		flex-shrink: 0;

		/* Both colours are parameters so the button works on the blue nav bar as
		   easily as on a white background. A caller sets --social-fg (and
		   optionally --social-hover-fg) on an ancestor; the defaults suit white. */
		color: var(--social-fg, var(--primary));
		border: 3px solid var(--social-fg, var(--primary));

		transition:
			color 0.3s,
			background-color 0.3s;

		&:hover {
			background-color: var(--social-fg, var(--primary));
			color: var(--social-hover-fg, white);
		}

		&:focus-visible {
			outline: 2px solid var(--social-fg, var(--primary));
			outline-offset: 2px;
		}
	}
</style>
