export async function obtainProducts() {
  try {
    const res = await fetch("http://localhost:9001/api/product/getProds")
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function obtainSingleProduct(id) {
  try {
    const res = await fetch("http://localhost:9001/api/product/" + id)
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function deleteSingleProduct(id) {
  try {
    const res = await fetch("http://localhost:9001/api/product/remove/" + id, { method: "delete" })
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function buyProduct(id) {
  try {
    const res = await fetch("http://localhost:9001/api/product/buy/" + id, { method: "put" })
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
