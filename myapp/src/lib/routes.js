import Homepage from "./HomePage/Homepage.svelte";
import Error from "./404-Page/ErrorPage.svelte";
import { wrap } from "svelte-spa-router/wrap"

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
    "/politica_privacidad": wrap({
        asyncComponent: () => import("./Footer/PoliticaPrivacidad.svelte")
    }),
    "/aviso_legal": wrap({
        asyncComponent: () => import("./Footer/AvisoLegal.svelte")
    }),
    "/politica_cookies": wrap({
        asyncComponent: () => import("./Footer/PoliticaCookies.svelte")
    }),
    "*": Error,
};

export default routes;