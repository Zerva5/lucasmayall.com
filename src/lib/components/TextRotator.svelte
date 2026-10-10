<script lang="ts">
	import { slide } from "svelte/transition";
	import { onMount } from "svelte";

	let { options, interval = 3000 }: { options: string[]; interval?: number } = $props();

	let currentOption = $state(0);
	let reduceMotion = $state(false);
	let previous = -1;

	/** Pick at random, but never the same word twice in a row -- repeating one
	 *  straight after itself reads as a glitch. */
	function nextIndex() {
		if (options.length < 2) return 0;
		let candidate = Math.floor(Math.random() * options.length);
		while (candidate === previous) {
			candidate = Math.floor(Math.random() * options.length);
		}
		previous = candidate;
		return candidate;
	}

	onMount(() => {
		// `transition:slide` is driven by Svelte's JS runtime, not by the CSS
		// `transition` property, so honouring prefers-reduced-motion means
		// shortening the duration -- not `transition: none` in the stylesheet.
		const motion = matchMedia("(prefers-reduced-motion: reduce)");
		reduceMotion = motion.matches;
		const onMotionChange = () => (reduceMotion = motion.matches);
		motion.addEventListener("change", onMotionChange);

		// Returns a cleanup function, so the interval is cleared on unmount.
		const timer = setInterval(() => {
			currentOption = nextIndex();
		}, interval);

		return () => {
			clearInterval(timer);
			motion.removeEventListener("change", onMotionChange);
		};
	});
</script>

<div class="rotator">
	{#key currentOption}
		<span transition:slide={{ duration: reduceMotion ? 0 : 300 }} class="word">
			{options[currentOption]}
		</span>
	{/key}
</div>

<style lang="scss">
	.rotator {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--primary);
	}

	.word {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		background-color: var(--primary);
		color: white;
		padding: 0.5rem;
	}
</style>
