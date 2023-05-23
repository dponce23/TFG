import Homepage from "./HomePage/Homepage.svelte";
import Error from "./404-Page/ErrorPage.svelte";
import { wrap } from "svelte-spa-router/wrap"
import Hombre from "./Hombre/Hombre.svelte";
import Mujer from "./Mujer/Mujer.svelte";
import Ninio from "./Ninio/Ninio.svelte";
import PoliticaPrivacidad from "./Footer/PoliticaPrivacidad.svelte";
import AvisoLegal from "./Footer/AvisoLegal.svelte";
import PoliticaCookies from "./Footer/PoliticaCookies.svelte";
import Product from "./Product/Product.svelte";

const routes = {
    "/": Homepage,
    "/hombre": Hombre,
    "/mujer": Mujer,
    "/ninio": Ninio,
    "/politica_privacidad": PoliticaPrivacidad,
    "/aviso_legal": AvisoLegal,
    "/politica_cookies": PoliticaCookies,
    "/producto": Product,
    "*": Error,
};

export default routes;