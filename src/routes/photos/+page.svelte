<script lang="ts">
    import frog from "$lib/images/wildlife/2025-09_frog.jpg";
    import owl from "$lib/images/wildlife/2025-09_great-horned-owl.jpg";
    import blackbird from "$lib/images/wildlife/2025-09_blackbird.jpg";
    import heron from "$lib/images/wildlife/2025-09_heron.jpg";
    import mallard from "$lib/images/wildlife/2025-09_mallard.jpg";
    import GalleryImage from "$lib/components/GalleryImage.svelte";

    let images = [
        {
            id: 1,
            src: mallard,
            caption: "Mallard Duck slurping up a snack",
            alt: "Beach at sunset",
        },
        {
            id: 2,
            src: owl,
            caption: "Great-Horned Owl",
            alt: "Forest trail",
        },
        {
            id: 3,
            src: frog,
            caption: "Frog on a log",
            alt: "Frog on a log",
        },
        {
            id: 4,
            src: blackbird,
            caption: "Blackbird having a rest",
            alt: "City skyline",
        },
        {
            id: 5,
            src: heron,
            caption: "Great Blue Heron adjusting it's snack",
            alt: "Desert dunes",
        },
    ];
</script>

<main>
    <h1>Photos</h1>
    <p>Some photos I've taken. Try clicking on one to make it bigger.</p>

    <section class="gallery">
        {#each images as image}
            <GalleryImage src={image.src} caption={image.caption} />
            <!--<div class="gallery-item">-->
            <!--<img src={image.src} alt={image.alt} loading="lazy" />-->
            <!--</div>-->
        {/each}
    </section>
</main>

<style>
    main {
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
        color: #666;
        margin-bottom: 2rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
</style>
