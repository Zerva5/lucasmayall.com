<script lang="ts">
	import { page } from "$app/state";
	import SocialButton from "$lib/components/SocialButton.svelte";
	import Github from "$lib/components/icons/github.svelte";
	import Linkedin from "$lib/components/icons/linkedin.svelte";
	import Mail from "$lib/components/icons/mail.svelte";
	import MenuButton from "$lib/components/nav/MenuButton.svelte";
	import { SOCIALS, type SocialIcon } from "$lib/site";
	import type { Snippet } from "svelte";

	let { children }: { children?: Snippet } = $props();

	let isOpen = $state(false);
	let pathname = $derived(page.url.pathname);

	// SOCIALS stores icon names so the config stays serialisable; Vite needs real
	// imports, so they're mapped here.
	const icons: Record<SocialIcon, typeof Linkedin> = {
		linkedin: Linkedin,
		github: Github,
		mail: Mail,
	};

	// Close the menu whenever the route changes.
	$effect(() => {
		pathname;
		isOpen = false;
	});
</script>

<nav class="navbar">
	<div class="nav-left">
		<MenuButton bind:open={isOpen} />
	</div>

	<div class="nav-middle">
		<ul class="nav-items" class:active={isOpen}>
			{@render children?.()}
		</ul>
	</div>

	<ul class="socials">
		{#each SOCIALS as social (social.href)}
			<li>
				<SocialButton href={social.href} label={social.label}>
					{@const Icon = icons[social.icon]}
					<Icon />
				</SocialButton>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.navbar {
		display: flex;
		padding: 0.5rem 2rem;
		position: relative;
		background-color: var(--primary);
		align-items: center;
	}

	.nav-left {
		display: flex;
		min-width: 2rem;
	}

	// Desktop: CSS Grid with equal outer columns for perfect centering
	@media (min-width: 769px) {
		.navbar {
			display: grid;
			grid-template-columns: 1fr auto 1fr; // Equal left/right, center takes only what it needs
			gap: 1rem;
			padding-right: 2rem; // Extra padding so socials don't touch edge
		}

		// Column 1: Left spacer (nav-left is here but hidden)
		.nav-left {
			visibility: hidden; // Hidden but maintains grid track
		}

		// Column 2: Nav items centered (auto width, centered in column)
		.nav-middle {
			justify-self: center;
			min-width: 0; // Allow shrinking
		}

		// Column 3: Socials right-aligned
		.socials {
			justify-self: end;
			gap: 1rem;
		}
	}

	// Base styles (mobile + shared)
	.nav-middle {
		display: flex;
		justify-content: center;

		.nav-items {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
		}
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;

		// Recolour the social buttons for the blue bar: white outline and glyph,
		// flipping to blue-on-white when filled on hover.
		--social-fg: white;
		--social-hover-fg: var(--primary);
	}

	/* Mobile Styles */
	@media (max-width: 768px) {
		.navbar {
			justify-content: space-between; // Hamburger left, socials right
			padding: 0.5rem 1rem; // Reduced horizontal padding on mobile
		}

		.nav-left {
			display: block;
		}

		// Socials always visible on mobile, right-aligned
		.socials {
			display: flex;
			gap: 0.5rem;
		}

		.nav-middle {
			// NOT `position: relative` here. The dropdown below is absolutely
			// positioned, and the nearest positioned ancestor becomes its
			// containing block -- anchoring it to this box made `left: 0` mean
			// "start of the nav links", so a 100vw panel hung off to the right.
			// `.navbar` is the positioning context instead.

			.nav-items {
				display: none; /* Hide navigation items initially */
				position: absolute;
				top: 100%;
				// Spans the bar rather than starting at an arbitrary offset.
				left: 0;
				right: 0;
				z-index: 10;
				background-color: var(--primary);
				flex-direction: column;
				align-items: center;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

				&.active {
					display: flex;
				}
			}
		}
	}
</style>
