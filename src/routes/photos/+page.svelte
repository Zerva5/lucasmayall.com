<script lang="ts">
	import frog from "$lib/images/wildlife/2025-09_frog.jpg";
	import owl from "$lib/images/wildlife/2025-09_great-horned-owl.jpg";
	import blackbird from "$lib/images/wildlife/2025-09_blackbird.jpg";
	import heron from "$lib/images/wildlife/2025-09_heron.jpg";
	import mallard from "$lib/images/wildlife/2025-09_mallard.jpg";
	import GalleryImage from "$lib/components/GalleryImage.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { PAGES } from "$lib/site";

	const images = [
		{
			id: 1,
			src: mallard,
			caption: "Mallard Duck slurping up a snack",
			alt: "A mallard duck with its head dipped into the water",
		},
		{
			id: 2,
			src: owl,
			caption: "Great-Horned Owl",
			alt: "A great horned owl perched in a tree",
		},
		{
			id: 3,
			src: frog,
			caption: "Frog on a log",
			alt: "A frog sitting on a log",
		},
		{
			id: 4,
			src: blackbird,
			caption: "Blackbird having a rest",
			alt: "A blackbird resting on a branch",
		},
		{
			id: 5,
			src: heron,
			caption: "Great Blue Heron adjusting it's snack",
			alt: "A great blue heron adjusting a fish in its beak",
		},
	];
</script>

<Seo title={PAGES["/photos"].title} description={PAGES["/photos"].description} path="/photos" />

<div class="photos">
	<h1>Photos</h1>
	<p>Some photos I've taken. Try clicking on one to make it bigger.</p>

	<section class="gallery">
		{#each images as image (image.id)}
			<GalleryImage src={image.src} alt={image.alt} caption={image.caption} />
		{/each}
	</section>
</div>

<style lang="scss">
	.photos {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		text-align: center;
		color: var(--color-text-muted);
		margin-bottom: 2rem;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>
