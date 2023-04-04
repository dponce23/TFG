<script>
  export let links = [];
  import { link } from "svelte-spa-router";
  const showMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };
  window.onclick = function (event) {
    if (!event.target.matches(".menu")) {
      var dropdowns = document.getElementsByClassName("content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
</script>

<div class="bodyNav">
  <img src="/src/assets/logo.png" alt="" />
  <div class="linksNav">
    <div on:click={showMenu} class="menu">Menu</div>
    <div id="myDropdown" class="content">
      {#each links as l}
        <div class="link">
          <a href={l.link} use:link>{l.text}</a>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  @import "./Nav.less";
</style>
