<script>
  export let data = {};

  const etiqueta = "EXCLUSIVO";
</script>

<div class="container">
  <span class="etiqueta"><b>{etiqueta}</b></span>
  <div class="info">
    <div>
      <img src={data?.image} alt="" />
    </div>
    <div class="texto">
      <p><b>¡¡OFERTA DISPONIBLE!!</b></p>
      <p class="porcentaje">-50%</p>
    </div>
  </div>
</div>

<style>
  @import "./Banner.less";
</style>
