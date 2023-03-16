export async function obtainProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    let products = [];
    data.forEach((prod, i) => {
<<<<<<< HEAD:myapp/src/lib/Api/apiCall.js
        productos[i] = prod;
=======
        products[i] = prod;
>>>>>>> main:myapp/src/lib/apiTest.js
    });
    return products
}

