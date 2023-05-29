
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

export async function obtainUsers() {
  try {
    const res = await fetch("http://localhost:9001/api/users")
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function obtainSingleUser(user) {
  try {
    const userData = {
      userName: user.name,
      email: user.email,
      phone: user.phone
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch("http://localhost:9001/api/users/single_user", options)
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function checkUserAuthorized(user) {
  try {
    const userData = {
      userName: user.name,
      password: user.password
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch("http://localhost:9001/api/users/is_authorized", options)
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function insertUser(user) {
  try {
    const userData = {
      userName: user.name,
      password: user.password,
      email: user.email,
      billing_address: user.billingAddress,
      default_shipping_address: user.shippingAddress,
      country: user.country,
      phone: user.phone,
      myProducts: user.myProducts
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch("http://localhost:9001/api/users", options)
    console.log("dentro")
    return res.json()
  } catch (error) {
    console.log(error);
    return error;
  }
}
