<script lang="ts">
    import resume from "$lib/resume.pdf";
    import { onMount } from "svelte";

    let pdf: HTMLEmbedElement;

    onMount(() => {
        pdf.height = Math.min(window.innerHeight - 150, 1000) + "px";
    });
</script>

<embed
    src={resume}
    type="application/pdf"
    width="100%"
    height="800px"
    bind:this={pdf}
/>

<span>Last updated: October 2023</span>

<style lang="scss">
    span {
        display: block;
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #777;
    }
</style>
