<script>
  import { productos } from "./data-mock.json";
</script>

{#each productos as producto}
  {#if producto.exclusivo}
    <div class="container">
      <span class="etiqueta"><b>exclusivo</b></span>
      <div class="info">
        <img src="/src/assets/camiseta_blanca.png" alt="" class="imagen" />
        <p class="descripcion">{producto.descripcion}</p>
      </div>
    </div>
  {/if}
{/each}

<style>
  .container {
    position: relative;
    margin: 00.16rem;
    background-image: url("/src/assets/fondo_banner.png");
    width: 1280px;
    height: 700px;
  }
  .etiqueta {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0.5rem;
    background-color: rgb(255, 167, 167);
    border: solid red 0.16rem;
    border-radius: 0.75rem;
  }
  .imagen {
    width: 500px;
    height: 500px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
