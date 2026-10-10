<script lang="ts">
	let { img, alt = "Lucas Mayall" }: { img: string; alt?: string } = $props();
</script>

<div class="profile-photo">
	<img src={img} {alt} width="200" height="200" loading="lazy" decoding="async" />
</div>

<style lang="scss">
	.profile-photo {
		/* Explicit box, overflow hidden and a circular radius turn any aspect
		   ratio into a neat avatar without needing a pre-cropped image. */
		width: 200px;
		height: 200px;
		overflow: hidden;
		border-radius: 100%;
		margin: 0 auto;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}

	@media (max-width: 768px) {
		.profile-photo {
			width: 150px;
			height: 150px;
		}
	}
</style>
