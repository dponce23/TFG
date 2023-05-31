import { getCookie } from "./Cookies.utils"
export let links = [
  { text: "Inicio", link: "/" },
  { text: "Moda Hombre", link: "/hombre" },
  { text: "Moda Mujer", link: "/mujer" },
  { text: "Niños", link: "/ninio" },
]

const loggedLinks = [
  { text: "Mis Compras", link: "/mis_compras" },
  { text: "Cerrar Sesion", link: "/cerrar_sesion" }
]
const not_loggedLinks = [
  { text: "Iniciar Sesion", link: "/inicio_sesion" },
  { text: "Registrase", link: "/registro" }
]

const authorized = getCookie("UserID")

if (authorized) {

  links.push(loggedLinks[0], loggedLinks[1])
} else {

  links.push(not_loggedLinks[0], not_loggedLinks[1])
}

