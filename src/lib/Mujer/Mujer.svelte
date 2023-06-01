<script>
  import { obtainProducts } from "../Api/apiCall";
  import ProductListing from "../Product/ProductListing.svelte";
  let womanProds = [];

  try {
    obtainProducts().then((prods) => {
      womanProds = prods.filter((p) => p.category.includes("mujer"));
    });
  } catch (e) {
    console.log(e);
  }
</script>

<p class="plp_title">MODA MUJERES</p>

<ProductListing products={womanProds} />

<style>
  @import "./Mujer.less";
</style>
