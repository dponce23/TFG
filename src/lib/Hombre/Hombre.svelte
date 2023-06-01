<script>
  import ProductListing from "../Product/ProductListing.svelte";
  import { obtainProducts } from "../Api/apiCall";
  let manProds = [];

  try {
    obtainProducts().then((prods) => {
      manProds = prods.filter((p) => p.category.includes("hombre"));
    });
  } catch (e) {
    console.log(e);
  }
</script>

<p class="plp_title">MODA HOMBRES</p>
<ProductListing products={manProds} />

<style>
  @import "./Hombre.less";
</style>
