<script lang="ts">
	let { src, alt = "", caption = "" }: { src: string; alt?: string; caption?: string } = $props();

	let isOpen = $state(false);
	let dialog = $state<HTMLDivElement | undefined>();
	let closeButton = $state<HTMLButtonElement | undefined>();
	let trigger = $state<HTMLButtonElement | undefined>();

	function open() {
		isOpen = true;
	}

	function close() {
		isOpen = false;
		trigger?.focus();
	}

	// Trap focus inside the modal and close on Escape.
	$effect(() => {
		if (!isOpen) return;

		closeButton?.focus();

		function onKeydown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				event.preventDefault();
				close();
				return;
			}

			if (event.key !== "Tab" || !dialog) return;

			const focusable = dialog.querySelectorAll<HTMLElement>("button, [href]");
			if (focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}

		window.addEventListener("keydown", onKeydown);
		return () => window.removeEventListener("keydown", onKeydown);
	});
</script>

<button class="image-container" onclick={open} bind:this={trigger} aria-haspopup="dialog">
	<img {src} {alt} loading="lazy" decoding="async" />
	<div class="caption-overlay">{caption}</div>
</button>

{#if isOpen}
	<div
		class="modal"
		role="dialog"
		aria-modal="true"
		aria-label={caption || "Image"}
		tabindex="-1"
		bind:this={dialog}
	>
		<img {src} {alt} />
		<button class="backdrop" onclick={close} aria-label="Close image"></button>
		<button class="close" onclick={close} bind:this={closeButton} aria-label="Close image">
			&times;
		</button>
	</div>
{/if}

<style>
	.image-container {
		position: relative;
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 8px;
		overflow: hidden;

		&:focus-visible {
			outline: 3px solid var(--primary);
			outline-offset: 2px;
		}
	}

	.caption-overlay {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		padding: 0.5rem;
		font-size: 0.8rem;
		text-align: center;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.image-container:hover img {
		transform: scale(1.05);
	}

	/* Modal styles */
	.modal {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

	.modal img {
		max-width: 90%;
		max-height: 90%;
		border-radius: 8px;
		position: relative;
		z-index: 1;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		border: none;
		background: transparent;
		cursor: zoom-out;
	}

	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 2;
		width: 2.5rem;
		height: 2.5rem;
		font-size: 2rem;
		line-height: 1;
		color: #fff;
		background: rgba(0, 0, 0, 0.5);
		border: none;
		border-radius: 50%;
		cursor: pointer;

		&:hover {
			background: rgba(0, 0, 0, 0.75);
		}

		&:focus-visible {
			outline: 3px solid #fff;
			outline-offset: 2px;
		}
	}
</style>
