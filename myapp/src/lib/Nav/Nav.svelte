<script>
  export let links = [];
</script>

<div class="body">
  <img src="/src/assets/logo.png" alt="" />
  <div>
    {#each links as link}
      <a href={link.enlace}>{link.texto}</a>
    {/each}
  </div>
</div>

<style>
  @import "./Nav.less";
</style>
