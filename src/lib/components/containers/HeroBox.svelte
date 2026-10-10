<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children?: Snippet } = $props();
</script>

<div class="hero-box">
	{@render children?.()}
</div>

<style lang="scss">
	.hero-box {
		background-color: var(--color-surface);
		border-radius: 0.5rem;
		display: flex;
		padding: 1rem;
		justify-content: center;
	}
</style>
