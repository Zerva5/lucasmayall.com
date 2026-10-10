<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children?: Snippet } = $props();
</script>

<section class="main-content">
	{@render children?.()}
</section>

<style lang="scss">
	.main-content {
		text-align: center;
		padding: 1rem;
	}
</style>
