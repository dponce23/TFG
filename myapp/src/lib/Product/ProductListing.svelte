<script>
    export let products = [];
</script>

<div class="articles">
    {#each products as prod}
        <div class="article">
            <img src={prod?.image} alt="" />
            <div class="info">
                <p>{prod?.title}</p>
                <p>{prod?.description}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .articles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .article {
        width: 15rem;
        height: 15rem;
        padding: 2rem;
        margin: 0.75rem;
        border: 0.16rem solid black;
    }
    .article p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .article img {
        width: 10rem;
        height: 10rem;
    }
</style>
