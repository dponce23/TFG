export async function obtenerProductos() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    let productos = [];
    data.forEach((prod, i) => {
        productos[i] = prod;
    });
    return productos
}

