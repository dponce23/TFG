<script>
  export let data = {};

  const etiqueta = "EXCLUSIVO";
</script>

<div class="container">
  <span class="etiqueta"><b>{etiqueta}</b></span>
  <div class="info">
    {#if data?.exclusivo == "1"}
      <div>
        <img src={data?.imagen} alt="" />
      </div>
      <div class="texto">
        <p><b>¡¡OFERTA DISPONIBLE!!</b></p>
        <p>{data?.descripcion}</p>
      </div>
    {/if}
    {#if data?.exclusivo == "2"}
      <div class="texto">
        <p><b>DESCUENTO 10% </b></p>
        <p>{data?.descripcion}</p>
      </div>
      <div>
        <img src={data?.imagen} alt="" />
      </div>
    {/if}
  </div>
</div>

<style>
  @import "./Banner.less";
</style>
