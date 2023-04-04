<script>
    import { link } from "svelte-spa-router";
    export let products = [];
</script>

<div class="articles">
    {#each products as prod}
        <div class="article">
            <a href="/producto" use:link><img src={prod?.image} alt="" /></a>
            <strong><p>{prod?.title}</p></strong>
            <p>{prod?.description}</p>
        </div>
    {/each}
</div>

<style>
    @import "./ProductListing.less";
</style>
