<script>
    import { obtainProducts } from "../Api/apiCall";
    import ProductListing from "../Product/ProductListing.svelte";
    let childProducts = [];

    try {
        obtainProducts().then((prods) => {
            childProducts = prods.filter((p) => !p.category.includes("men"));
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>MODA NIÑOS</h1>
<ProductListing products={childProducts} />

<style>
    @import "./Ninio.less";
</style>
