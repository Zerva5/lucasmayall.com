<script>
	import NavBar from "$lib/components/nav/NavBar.svelte";
	import NavBarItem from "$lib/components/nav/NavBarItem.svelte";
	import "./styles.scss";
</script>

<div>
	<NavBar>
		<NavBarItem url="/">Home</NavBarItem>
		<NavBarItem url="/resume">Resume</NavBarItem>
	</NavBar>

	<main>
		<slot />
	</main>
	<footer>Last update June 8, 2024</footer>
</div>

<style lang="scss">
	@import "/src/style/root.scss";

	div {
		background-color: $primary;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		// display: flex;
		// flex-direction: column;
		// padding: 1rem;
		// max-width: 64rem;
		// margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
		margin-left: auto;
		margin-right: auto;

		width: 100vw;
		// margin: 1rem;
	}

	footer {
		padding: 6px 0;
		text-align: center;
		background-color: $primary;
		color: white;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
