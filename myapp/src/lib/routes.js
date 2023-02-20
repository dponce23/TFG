import Homepage from "./HomePage/Homepage.svelte";
import Error from "./404-Page/ErrorPage.svelte";
import {wrap} from "svelte-spa-router/wrap"

const routes = {
  "/": Homepage,
  "/hombre": wrap({
      asyncComponent: () => import("./Hombre/Hombre.svelte")
  }),
  "/mujer": wrap({
      asyncComponent: () => import("./Mujer/Mujer.svelte")
  }),
  "/ninio": wrap({
      asyncComponent: () => import("./Ninio/Ninio.svelte")
  }),
  "*": Error,
};

export default routes;