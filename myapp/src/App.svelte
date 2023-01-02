<script>
  import Router from "svelte-spa-router";
  import routes from "./lib/routes";
  import Nav from "./lib/Nav/Nav.svelte";
  import { links } from "./lib/data-mock.json";
  import Footer from "./lib/Footer/Footer.svelte";
</script>

<main>
  <Nav {links} />
  <Router {routes} />
  <Footer />
</main>

<style>
</style>
