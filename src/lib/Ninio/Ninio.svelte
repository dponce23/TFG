<script>
  import { obtainProducts } from "../Api/apiCall";
  import ProductListing from "../Product/ProductListing.svelte";
  let childProducts = [];

  try {
    obtainProducts().then((prods) => {
      childProducts = prods.filter((p) => p.category.includes("ninio"));
    });
  } catch (e) {
    console.log(e);
  }
</script>

<p class="plp_title">MODA NIÑOS</p>
<ProductListing products={childProducts} />

<style>
  @import "./Ninio.less";
</style>
