<script>
  import Router from "svelte-spa-router";
  import routes from "./lib/routes";
  import Nav from "./lib/Nav/Nav.svelte";
  import { links } from "./lib/buttonLinks_Mock";
  import Footer from "./lib/Footer/Footer.svelte";
  import { getCookie } from "./lib/Cookies.utils";

  let visible = true;
  let isLogged = getCookie("UserID") ? true : false;

  if (!isLogged) {
    visible = false;
  } else {
    visible = true;
  }
</script>

<main>
  <div>
    <Nav {links} />
  </div>
  {#if visible}
    <a class="cart_icon" href="#/carrito"
      ><img src="src/assets/carrito-de-compras.png" alt="carrito" /></a
    >
  {/if}
  <div class="bodyPages">
    <Router {routes} />
  </div>
  <Footer />
</main>

<style>
</style>
