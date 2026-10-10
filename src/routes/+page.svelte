<script lang="ts">
	import HeroBox from "$lib/components/containers/HeroBox.svelte";
	import Pin from "$lib/components/icons/pin.svelte";
	import MainContent from "$lib/components/containers/MainContent.svelte";
	import ProfilePhoto from "$lib/components/ProfilePhoto.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import TextRotator from "$lib/components/TextRotator.svelte";
	import profileImg from "$lib/images/profile.jpg";
	import { PAGES } from "$lib/site";

	const herobg = "/hero-bg.jpg";

	const nicknames = [
		"Software Developer",
		"Hiker",
		"Mountain Biker",
		"Rock Climber",
		"Photographer",
		"Amateur Mechanic",
		"Snowboarder",
		"Gamer",
		"Dog Lover",
		"Canadian",
		"Cheese Cake Enthusiast",
		"Vim User",
		"Linux Elitist",
		"CamelCase Snob",
		"Cookie Baker",
	];
</script>

<Seo
	title={PAGES["/"].title}
	description={PAGES["/"].description}
	path="/"
	type={PAGES["/"].type}
/>

<section class="whoami">
	<img src={herobg} alt="" aria-hidden="true" fetchpriority="high" />
	<div class="hero-container">
		<HeroBox>
			<div class="profile-photo">
				<ProfilePhoto img={profileImg} />

				<h2>Hey 👋</h2>
				<p>My name is <span class="name">Lucas</span></p>
			</div>
		</HeroBox>
		<div class="herobox-container">
			<HeroBox>
				<div class="ima">
					<p>I'm known by my friends as a</p>
					<div class="rotator">
						<TextRotator options={nicknames} interval={3000} />
					</div>
				</div>
			</HeroBox>
			<HeroBox>
				<div class="location">
					<p>
						<span class="location-pin"><Pin /></span> Kamloops, BC
					</p>
				</div>
			</HeroBox>
		</div>
	</div>
</section>

<MainContent>
	<h1>Woah! Not much here right now.</h1>
	<p>
		This website is mainly here to host my resume. In the future I'd love to post pictures and
		stories from trips I go on.
		<br />
		Maybe I'll write some blog posts at some point. Who knows!
	</p>
</MainContent>

<style lang="scss">
	.ima {
		p {
			margin: 0;
		}

		.rotator {
			margin-top: 0.5rem;
		}
	}

	.whoami {
		position: relative;
		overflow: hidden;

		& > img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			left: 0;
			filter: blur(2px);
			transform: scale(1.1);
			z-index: 1;
		}

		& > .hero-container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 5rem;
			height: 100%;
			gap: 1rem;
			z-index: 2;
			position: relative;

			@media (max-width: 768px) {
				flex-direction: column;
				padding: 2rem 1rem;
			}
		}
	}

	section {
		text-align: center;
	}

	.profile-photo {
		h2 {
			font-size: 2rem;
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}
		p {
			margin: 0;
			line-height: 1rem;
		}
	}

	.location {
		text-align: left;

		p {
			margin: 0;
		}
	}

	.location-pin {
		color: brown;
	}

	span.name {
		font-weight: bold;
		color: var(--primary);
	}

	.herobox-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
