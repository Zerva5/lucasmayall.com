<script lang="ts">
    export let open = false;
</script>

<button
    class="menu-button"
    aria-label="Toggle Navigation"
    on:click={() => (open = !open)}
    class:open
>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
</button>

<style lang="scss">
    $line-width: 0.175rem;

    .menu-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        position: relative;

        transition: background-color 0.1s;

        &:hover {
            background-color: #0000000f;
        }
    }

    .container {
        display: flex;
        justify-content: center;
        height: 1.5rem;
    }

    span {
        display: block;
        width: 1.5rem;
        height: $line-width;
        background: #333;
        transition:
            transform 0.3s,
            opacity 0.3s;
        position: absolute;
        top: calc($line-width * 5) + calc($line-width / 5);

        &:nth-child(1) {
            transform: translateY(-0.5rem);
        }

        &:nth-child(2) {
        }

        &:nth-child(3) {
            transform: translateY(0.5rem);
        }
    }

    .open span {
        &:nth-child(1) {
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:nth-child(3) {
            transform: rotate(-45deg);
        }
    }
</style>
