<script lang="ts">
    export let href: string;
    export let alt: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
    <slot />
</a>

<style lang="scss">
    @import "/src/style/root.scss";

    a {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        border: 2px solid $primary;
        padding: 0.125rem;
        // width: ;
        height: 75%;
        aspect-ratio: 1;

        color: #337ccf;

        transition:
            color 0.3s,
            background-color 0.3s;

        &:hover {
            color: white;
            background-color: $primary;
        }
    }

    div {
        width: 2rem;
        height: 2rem;
    }
</style>
