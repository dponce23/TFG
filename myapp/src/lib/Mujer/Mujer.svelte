<script>
    import { obtainProducts } from "../apiTest";
    import ProductListing from "../Product/ProductListing.svelte";
    let womanProds = [];

    try {
        obtainProducts().then((prods) => {
            prods.forEach((e, i) => {
                if (prods[i].category.includes("men")) {
                    console.log(e.id);
                    womanProds[i] = e;
                } else {
                    console.log("hola");
                }
            });
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>PAGINA MUJERES</h1>

<ProductListing products={womanProds} />

<style>
    @import "./Mujer.less";
</style>
