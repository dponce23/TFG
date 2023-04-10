<script>
    import { obtainProducts } from "../Api/apiCall";
    const initialPos = window.location.href.indexOf("=", 0) + 1;
    let prodId = window.location.href.substring(
        initialPos,
        window.location.href.length
    );
    let productInfo = {};
    let loading = true;
    try {
        obtainProducts().then((prods) => {
            productInfo = prods.find((p) => p.id == prodId);
            loading = false;
        });
    } catch (e) {
        console.log(e);
    }
</script>

<div>
    {#if loading}
        <div>Loading...</div>
    {:else}
        <div class="prod_container">
            <p class="prod_title">{productInfo.title}</p>
            <img src={productInfo.image} alt="" />
            <p class="prod_description">{productInfo.description}</p>
        </div>
    {/if}
</div>

<style>
    @import "./Product.less";
</style>
