<script lang="ts">
    export let img: string;
</script>

<div class="placer">
    <div class="container">
        <img src={img} alt="profile photo" />
    </div>
</div>

<style lang="scss">
    .placer {
        // border: 4px solid #0066ff;
        display: inline-block;
        border-radius: 100%;
    }

    .container {
        width: 200px;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;

        img {
            object-fit: cover;
            width: 100%;
        }
    }
</style>
