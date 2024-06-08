<script lang="ts">
    import { slide } from "svelte/transition";

    export let options: string[] = []; // Array of text options
    export let interval = 2000; // Transition interval in milliseconds
    let currentOption = 0;

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
    $primary: #337ccf;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    .text-rotator {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
    }

    span {
        background-color: $primary;
        color: white;
        padding: 0.5rem;
    }
</style>
