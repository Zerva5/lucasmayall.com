<script>
    import { page } from "$app/stores";

    export let url;

    $: isActive = $page.url.pathname == url;
</script>

<li class="nav-item" class:active={isActive}>
    <a href={url} aria-current={isActive} on:click>
        <slot />
    </a>
</li>

<style lang="scss">
    $primary: #337ccf;

    .nav-item {
        margin: 0 1rem;

        &:hover a {
            color: $primary;
        }
    }

    .nav-item a {
        text-decoration: none;
        color: #777;
    }

    .active {
        & a {
            color: #333;
        }
    }
</style>
