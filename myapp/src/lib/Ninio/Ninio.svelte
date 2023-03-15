<script>
    import { obtainProducts } from "../apiTest";
    import ProductListing from "../Product/ProductListing.svelte";
    let childProducts = [];

    try {
        obtainProducts().then((prods) => {
            prods.forEach((e, i) => {
                if (!prods[i].category.includes("men")) {
                    console.log(e.id);
                    childProducts[i] = e;
                }
            });
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>PAGINA DE NIÑOS</h1>
<ProductListing products={childProducts} />

<style>
    @import "./Ninio.less";
</style>
