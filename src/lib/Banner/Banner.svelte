<script>
  export let data = {};

  const label = "EXCLUSIVO";
</script>

<div class="container">
  <span class="label"><b>{label}</b></span>
  <div class="info">
    <div class="banner_img">
      <img src={data?.image} alt="" />
    </div>
    <div class="text">
      <p><b>¡¡OFERTA DISPONIBLE!!</b></p>
      <p class="percentage">-50%</p>
    </div>
  </div>
</div>

<style>
  @import "./Banner.less";
</style>
