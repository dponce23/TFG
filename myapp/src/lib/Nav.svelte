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
  div {
    background-color: rgb(0, 0, 0);
  }
  a {
    padding: 1.5rem;
  }
  div.body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  img {
    width: 200px;
    height: 100px;
  }
</style>
