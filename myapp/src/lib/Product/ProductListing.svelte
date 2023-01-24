<script>
    import { productos } from "../data-mock.json";
    export let categoria = "";
</script>

<div class="articulos">
    {#each productos as prod}
        {#if prod?.stock > 0}
            {#if categoria === prod?.categoria}
                <div class="articulo">
                    <img src={prod?.imagen} alt="" />
                    <div class="info">
                        <p>{prod?.marca}</p>
                        <p>{prod?.descripcion}</p>
                    </div>
                </div>
            {/if}
        {/if}
    {/each}
</div>

<style>
    .articulos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .articulo {
        width: 20rem;
        height: 20rem;
        padding: 2rem;
        margin: 0.75rem;
        border: 0.16rem solid black;
    }
    .articulo p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .articulo img {
        width: 15rem;
        height: 15rem;
    }
</style>
