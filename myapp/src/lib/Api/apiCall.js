export async function obtainProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    let products = [];
    data.forEach((prod, i) => {
        products[i] = prod;
    });
    return products
}

