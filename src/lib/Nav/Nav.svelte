<script>
  import { removeCookie } from "../Cookies.utils";
  import { link } from "svelte-spa-router";
  export let links = [];

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

  const closeSession = () => {
    removeCookie("UserID");
    window.location.href = "/";
    window.alert("Sesion Cerrada");
  };
</script>

<div class="bodyNav">
  <a href="#/"><img src="/src/assets/logo.png" alt="" /></a>
  <div class="linksNav">
    <div on:click={showMenu} class="menu">Menu</div>
    <div id="myDropdown" class="content">
      {#each links as l}
        <div class="link">
          {#if l.link === "/cerrar_sesion"}
            <a href={l.link} use:link on:click={closeSession}>{l.text}</a>
          {:else}
            <a href={l.link} use:link>{l.text}</a>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  @import "./Nav.less";
</style>
