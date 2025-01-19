<script lang="ts">
    import { slide } from "svelte/transition";

    let { options, interval }: { options: string[]; interval: number } =
        $props();

    //export let options: string[] = []; // Array of text options
    //export let interval = 2000; // Transition interval in milliseconds
    let currentOption = $state(0);

    function transitionText() {
        let randomIndex = Math.floor(Math.random() * options.length);
        currentOption = randomIndex;
    }

    setInterval(transitionText, interval);
</script>

<div>
    {#key currentOption}
        <span transition:slide class="text-rotator">
            {options[currentOption]}
        </span>
    {/key}
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
        background-color: var(--primary);
    }

    .text-rotator {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
    }

    span {
        background-color: var(--primary);
        color: white;
        padding: 0.5rem;
    }
</style>
