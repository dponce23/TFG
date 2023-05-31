<script>
  import { link } from "svelte-spa-router";
  export let products = [];
</script>

<div class="articles">
  {#each products as prod}
    <a class="listingLinks" href="/product?id={prod._idProd}" use:link>
      <div class="article">
        <img src={prod?.image} alt="" />
        <strong><p>{prod?.brand}</p></strong>
        <p>{prod?.price}€</p>
      </div>
    </a>
  {/each}
</div>

<style>
  @import "./ProductListing.less";
</style>
