<script>
    import { obtainProducts } from "../Api/apiCall";
    import ProductListing from "../Product/ProductListing.svelte";
    let womanProds = [];

    try {
        obtainProducts().then((prods) => {
            womanProds = prods.filter((p) => p.category.includes("women"));
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>MODA MUJERES</h1>

<ProductListing products={womanProds} />

<style>
    @import "./Mujer.less";
</style>
