import Cookies from "js-cookie";

export function removeCookie(key) {
    Cookies.remove(key)
}

export function setCookie(key, value) {
    Cookies.set(key, value);
}

export function getCookie(key) {
    return Cookies.get(key);
}