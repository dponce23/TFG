<script>
  import Router from "svelte-spa-router";
  import routes from "./lib/routes";
  import Nav from "./lib/Nav/Nav.svelte";
  import { links } from "./lib/buttonLinks_Mock.json";
  import Footer from "./lib/Footer/Footer.svelte";
</script>

<main>
  <div>
    <Nav {links} />
  </div>
  <div class="bodyPages">
    <Router {routes} />
  </div>
  <Footer />
</main>

<style>
</style>
