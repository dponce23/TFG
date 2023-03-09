<script>
    import { obtenerProductos } from "../Api/apiCall";
    import ProductListing from "../Product/ProductListing.svelte";
    let prodNiños = [];

    try {
        obtenerProductos().then((prods) => {
            prods.forEach((e, i) => {
                if (!prods[i].category.includes("men")) {
                    console.log(e.id);
                    prodNiños[i] = e;
                }
            });
        });
    } catch (e) {
        console.log(e);
    }
</script>

<h1>PAGINA DE NIÑOS</h1>
<ProductListing productos={prodNiños} />

<style>
    @import "./Ninio.less";
</style>
