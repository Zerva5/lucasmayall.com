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
        &:hover a {
            color: $primary;
        }
    }

    .nav-item a {
        text-decoration: none;
        color: #777;
        padding: 1rem;
    }

    .active {
        & a {
            color: #333;
        }
    }

    @media (max-width: 768px) {
        a {
            font-size: 2rem;
            padding: 1rem 1rem;
            display: inline-block;
        }

        .nav-item {
            margin: unset;
        }
    }
</style>
