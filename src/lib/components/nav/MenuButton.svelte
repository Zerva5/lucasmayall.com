<script lang="ts">
	let { open = $bindable(false) }: { open?: boolean } = $props();
</script>

<button
	class="menu-button"
	class:open
	aria-label="Toggle navigation"
	aria-expanded={open}
	onclick={() => (open = !open)}
>
	<span class="line"></span>
	<span class="line"></span>
	<span class="line"></span>
</button>

<style lang="scss">
	$line-width: 0.175rem;

	.menu-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10;
		position: relative;

		transition: background-color 0.1s;

		&:hover {
			background-color: rgb(255 255 255 / 0.15);
		}

		&:focus-visible {
			outline: 2px solid white;
			outline-offset: 2px;
		}
	}

	.line {
		display: block;
		width: 1.5rem;
		height: $line-width;
		background: white;
		transition:
			transform 0.3s,
			opacity 0.3s;
		position: absolute;
		top: calc($line-width * 5);

		&:first-child {
			transform: translateY(-0.5rem);
		}

		&:last-child {
			transform: translateY(0.5rem);
		}
	}

	.open .line {
		&:first-child {
			transform: rotate(45deg);
		}

		&:nth-child(2) {
			opacity: 0;
		}

		&:last-child {
			transform: rotate(-45deg);
		}
	}
</style>
