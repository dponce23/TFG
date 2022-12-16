<script>
  import Router from "svelte-spa-router";
  import Hombre from "./lib/Hombre.svelte";
  import Homepage from "./lib/Homepage.svelte";
  import Mujer from "./lib/Mujer.svelte";
  import Ninio from "./lib/Ninio.svelte";

  let routes = {
    "/": Homepage,
    "/hombre": Hombre,
    "/mujer": Mujer,
    "/ninio": Ninio,
  };
</script>

<main>
  <Router {routes} />

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
  >
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
