<script>
	import NavBar from "$lib/components/nav/NavBar.svelte";
	import NavBarItem from "$lib/components/nav/NavBarItem.svelte";
	import { NAV_LINKS } from "$lib/site";
	import "./styles.scss";

	let { children } = $props();
</script>

<div class="shell">
	<NavBar>
		{#each NAV_LINKS as link (link.href)}
			<NavBarItem url={link.href}>{link.label}</NavBarItem>
		{/each}
	</NavBar>

	<main>
		{@render children()}
	</main>

	<footer>Last update {import.meta.env.VITE_LAST_UPDATE}</footer>
</div>

<style lang="scss">
	.shell {
		background-color: var(--primary);
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		box-sizing: border-box;
		background-color: white;
		margin-left: auto;
		margin-right: auto;
		// `width: 100%` rather than `100vw` -- 100vw includes the scrollbar
		// width and causes a horizontal scrollbar.
		width: 100%;
	}

	footer {
		padding: 6px 0;
		text-align: center;
		background-color: var(--primary);
		color: white;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
