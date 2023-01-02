<script>
  import { productos } from "../data-mock.json";
</script>

{#each productos as producto}
  {#if producto?.exclusivo == "1"}
    <div class="container">
      <span class="etiqueta"><b>EXCLUSIVO</b></span>
      <div class="info">
        <div>
          <img src={producto?.imagen} alt="" />
        </div>
        <div>
          <p><b>DESCUENTO 10%</b> {producto?.descripcion}</p>
        </div>
      </div>
    </div>
  {/if}
  {#if producto?.exclusivo == "2"}
    <div class="container">
      <span class="etiqueta"><b>EXCLUSIVO</b></span>
      <div class="info">
        <div>
          <p><b>DESCUENTO 10% </b> {producto?.descripcion}</p>
        </div>
        <div>
          <img src={producto?.imagen} alt="" />
        </div>
      </div>
    </div>
  {/if}
{/each}

<style>
  .container {
    position: relative;
    margin: 00.16rem;
    background-color: rgb(144, 144, 144);
  }

  .etiqueta {
    position: absolute;
    left: 2rem;
    padding: 0.5rem;
    background-color: rgb(255, 0, 0);
    border: solid rgb(255, 0, 0) 0.16rem;
    color: white;
  }

  .info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 4rem;
    font-size: 3rem;
  }

  .info div {
    width: 400px;
    height: 400px;
    line-height: 3rem;
    word-wrap: break-word;
  }

  img {
    width: 400px;
    height: 400px;
  }
</style>
