<script>
    export let products = [];
</script>

<div class="articles">
    {#each products as prod}
        <div class="article">
            <img src={prod?.image} alt="" />
            <p>{prod?.title}</p>
            <p>{prod?.description}</p>
        </div>
    {/each}
</div>

<style>
    @import "./ProductListing.less";
</style>
