<script>
  export let data = {};
</script>

{#if data?.exclusivo == "1"}
  <div class="container">
    <span class="etiqueta"><b>EXCLUSIVO</b></span>
    <div class="info">
      <div>
        <img src={data?.imagen} alt="" />
      </div>
      <div>
        <p><b>¡¡OFERTA DISPONIBLE!!</b> {data?.descripcion}</p>
      </div>
    </div>
  </div>
{/if}
{#if data?.exclusivo == "2"}
  <div class="container">
    <span class="etiqueta"><b>EXCLUSIVO</b></span>
    <div class="info">
      <div>
        <p><b>DESCUENTO 10% </b> {data?.descripcion}</p>
      </div>
      <div>
        <img src={data?.imagen} alt="" />
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    position: relative;
    background-color: rgba(144, 144, 144, 0.6);
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
