import Hombre from "./Hombre/Hombre.svelte";
import Homepage from "./HomePage/Homepage.svelte";
import Mujer from "./Mujer/Mujer.svelte";
import Ninio from "./Ninio/Ninio.svelte";
import Error from "./404-Page/ErrorPage.svelte";
import App from "../App.svelte";

const routes = {
  "/": Homepage,
  "/hombre": Hombre,
  "/mujer": Mujer,
  "/ninio": Ninio,
  "*": Error,
};

export default routes;