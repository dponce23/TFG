<script>
    export let productos = [];
</script>

<div class="articulos">
    {#each productos as prod}
        <div class="articulo">
            <img src={prod?.image} alt="" />
            <div class="info">
                <p>{prod?.title}</p>
                <p>{prod?.description}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .articulos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .articulo {
        width: 15rem;
        height: 15rem;
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
        width: 10rem;
        height: 10rem;
    }
</style>
