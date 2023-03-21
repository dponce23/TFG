<script>
    import ProductListing from "../Product/ProductListing.svelte";
    import { obtainProducts } from "../Api/apiCall";
    let manProds = [];

    try {
        obtainProducts().then((prods) => {
            manProds = prods.filter(
                (p) =>
                    p.category.includes("men") && !p.category.includes("women")
            );
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>MODA HOMBRES</h1>
<ProductListing products={manProds} />

<style>
    @import "./Hombre.less";
</style>
