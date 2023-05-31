import { writable } from "svelte/store";

export const objetos = writable([])

export function guardarObjeto(obj) {
    objetos.update(arr => {
        let check = arr.find(objeto => objeto.id === obj.id);
        if (!check) {
            return [...arr, obj];
        } else {
            let cantAnterior = arr.find(objeto => objeto.id === obj.id).quantity;
            let newArray = arr.map(objeto => {
                if (objeto.id === obj.id) {
                    return { ...objeto, quantity: obj.quantity + cantAnterior };
                }
                return objeto;
            });
            return newArray;
        }
    });
}
