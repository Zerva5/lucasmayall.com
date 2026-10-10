<script lang="ts">
	import { page } from "$app/state";

	let { url, children }: { url: string; children?: import("svelte").Snippet } = $props();

	let isActive = $derived(page.url.pathname === url);
</script>

<li class="nav-item" class:active={isActive}>
	<a href={url} aria-current={isActive ? "page" : undefined}>
		{@render children?.()}
	</a>
</li>

<style lang="scss">
	.nav-item:hover a {
		color: white;
	}

	// Sits on the blue nav bar, so links are white. The resting state is slightly
	// transparent so the active item stands out without needing a louder colour.
	.nav-item a {
		text-decoration: none;
		color: rgb(255 255 255 / 0.78);
		padding: 1rem;
		display: inline-block;
		// Always present, transparent when inactive, so highlighting the current
		// page doesn't shift the row.
		border-bottom: 2px solid transparent;
	}

	.active a {
		color: white;
		font-weight: 600;
		border-bottom-color: white;
	}

	@media (max-width: 768px) {
		a {
			font-size: 2rem;
			padding: 1rem;
		}
	}
</style>
