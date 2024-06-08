<script lang="ts">
    import { page } from "$app/stores";
    import SocialButton from "../SocialButton.svelte";
    import Github from "../icons/github.svelte";
    import Linkedin from "../icons/linkedin.svelte";
    import Mail from "../icons/mail.svelte";
    import MenuButton from "./MenuButton.svelte";

    let isOpen = false;
    let curUrl = $page.url.pathname;

    // Closes menu when navigating to a new page
    $: if ($page.url.pathname !== curUrl) {
        isOpen = false;
        curUrl = $page.url.pathname;
    }
</script>

<nav class="navbar">
    <div class="nav-left">
        <!--<slot name="logo" />-->
        <div class="menu-btn">
            <MenuButton bind:open={isOpen} />
        </div>
    </div>

    <div class="nav-middle">
        <ul class="nav-items" class:active={isOpen}>
            <slot />
        </ul>
    </div>

    <div class="nav-right">
        <div class="menu-btn-alt">
            <div class="socials">
                <SocialButton
                    href="https://www.linkedin.com/in/lucas-mayall/"
                    alt="LinkedIn"
                >
                    <Linkedin />
                </SocialButton>
                <SocialButton href="https://github.com/Zerva5" alt="Github">
                    <Github />
                </SocialButton>
                <SocialButton
                    href="mailto:talktome@lucasmayall.com"
                    alt="Email"
                >
                    <Mail />
                </SocialButton>
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    .nav-right {
        display: relative;

        & .menu-btn-alt {
            visibility: hidden;
            position: relative;
            width: 2rem;
            height: 2rem;

            & .socials {
                visibility: visible;
                position: absolute;
                height: 100%;
                top: 0;
                right: 0;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }

    .nav-left {
        display: none;
        min-width: 2rem;
        .menu-btn {
        }
    }

    .nav-middle {
        // height: 2rem;
        display: flex;
        justify-content: center;

        .nav-items {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
        }
    }

    .navbar {
        display: flex;
        padding: 0.5rem 2rem;
        background-color: #f0f0f0;
        justify-content: space-between;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
        .navbar {
            // flex-direction: column; /* Stack items vertically on mobile */
        }

        .nav-left {
            display: block;
        }

        .nav-middle {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: start;
            position: relative;

            & .nav-items {
                display: none; /* Hide navigation items initially */
                position: absolute;
                top: 0;
                width: 100vw;
                z-index: 10;
                background-color: #f0f0f0;
                flex-direction: column;
                align-items: center;
                // background-color: #e0e0e0;

                &.active {
                    display: flex;
                }
            }
        }

        .nav-items {
        }

        .menu-btn {
            display: block; /* Show menu toggle button on mobile */
        }
    }

    .socials {
    }
</style>
