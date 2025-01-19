<script lang="ts">
	import ProfilePhoto from "$lib/components/ProfilePhoto.svelte";
	import SocialButton from "$lib/components/SocialButton.svelte";
	import TextRotator from "$lib/components/TextRotator.svelte";
	import Linkedin from "$lib/components/icons/linkedin.svelte";
	import Github from "$lib/components/icons/github.svelte";
	import flag from "$lib/images/canada.png";
	import HeroBox from "$lib/components/containers/HeroBox.svelte";
	import Pin from "$lib/components/icons/pin.svelte";
	import canada from "$lib/images/canada.png";
	import Flag from "$lib/components/icons/flag.svelte";
	import MainContent from "$lib/components/containers/MainContent.svelte";
	import profileImg from "$lib/images/profile.jpg";

	const herobg = "/hero-bg.jpg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="whoami">
	<img src={herobg} alt="Background" />
	<div class="hero-container">
		<HeroBox>
			<!-- <div class="hero"> -->
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
						<TextRotator
							options={[
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
								"Linux Elitest",
								"CamelCase Snob",
								"Cookie Baker",
							]}
							interval={3000}
						/>
					</div>
				</div>
			</HeroBox>
			<HeroBox>
				<div class="location">
					<p>
						<span class="location-pin"><Pin /></span> Kamloops, BC
					</p>
					<!--<p>-->
					<!--<span class="location-flag"><Flag /></span>-->
					<!--<img src={canada} height="16px" alt="Canadian Flag" />-->
					<!--</p>-->
					<!--<br />-->
					<!--<br />-->
				</div>
			</HeroBox>
		</div>
	</div>
</section>

<MainContent>
	<h1>Woah! Not much here right now.</h1>
	<p>
		This website is mainly here to host my resume. In the future I'd love to
		post pictures and stories from trips I go on.
		<br />
		Maybe I'll write some blog posts at some point. Who knows!
	</p>
</MainContent>

<style lang="scss">
	@use "/src/style/root.scss";

	.ima {
		& p {
			margin: 0;
		}

		& .rotator {
			margin-top: 0.5rem;
		}
		// margin-bottom: 1rem;
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
			}
		}
	}

	.hero {
	}

	section {
		text-align: center;
	}

	.flag {
		height: 2rem;
	}

	.socials {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.location {
		text-align: left;
		// margin-top: 1rem;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// gap: 0.5rem;

		& p {
			margin: 0;
			// margin-top: 1rem;
		}
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

	span.name {
		font-weight: bold;
		color: var(--primary);
	}

	.location-pin {
		color: brown;
	}

	hr {
		margin: 1rem 0;
	}

	.herobox-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
