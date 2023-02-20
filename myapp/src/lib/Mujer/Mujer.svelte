<script>
    import { obtenerProductos } from "../apiTest";
    import ProductListing from "../Product/ProductListing.svelte";
    let prodMujer = [];

    try {
        obtenerProductos().then((prods) => {
            prods.forEach((e, i) => {
                if (prods[i].category.includes("men")) {
                    console.log(e.id);
                    prodMujer[i] = e;
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

<ProductListing productos={prodMujer} />

<style>
    @import "./Mujer.less";
</style>
