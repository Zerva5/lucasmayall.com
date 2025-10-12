<script lang="ts">
    let { src, alt = "", caption = "" } = $props();

    let isOpen = $state(false);

    function toggleModal() {
        isOpen = !isOpen;
    }
</script>

<!--<div>-->
<div class="image-container" on:click={toggleModal}>
    <img {src} {alt} loading="lazy" />
    <div class="caption-overlay">{caption}</div>
</div>

<!--<div class="caption">{caption}</div>-->
<!--</div>-->

{#if isOpen}
    <div class="modal" on:click={toggleModal}>
        <img {src} {alt} />
    </div>
{/if}

<style>
    .image-container {
        position: relative;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
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

    .image-container {
        position: relative;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
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

    .caption {
        text-align: center;
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: #555;
    }

    /* Modal styles */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        cursor: zoom-out;
    }

    .modal img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
    }
</style>
