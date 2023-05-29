<script>
  import { push } from "svelte-spa-router";
  import { insertUser, obtainSingleUser, obtainUsers } from "../Api/apiCall";
  import { onMount } from "svelte";
  const submitButton = document.querySelector("button");

  let user = {
    name: "",
    password: "",
    password2: "",
    email: "",
    billingAddress: "",
    shippingAddress: "",
    country: "",
    phone: "",
    myProducts: [],
  };

  function checkPassword() {
    const passwdInput = document.getElementById("Passwd2");
    if (user.password != user.password2) {
      passwdInput.style.border = "solid 0.16rem red";
      console.log("las contraseñas no coinciden");
    } else {
      passwdInput.style.border = "";
    }
  }

  function resetValues() {
    let formInputs = document.querySelectorAll("input");
    formInputs.forEach((i) => (i.value = ""));
  }
  async function checkRepeatedUser() {
    let response = await obtainSingleUser(user);
    return response ? true : false;
  }

  async function submit() {
    try {
      let isRepeated;
      await checkRepeatedUser().then((result) => {
        isRepeated = result;
      });

      const repeatedMessage = document.createElement("p");

      if (isRepeated) {
        let checkMessage = document.querySelector("p#repeatedMessage");
        if (checkMessage) {
          checkMessage.remove();
        } else {
          repeatedMessage.innerHTML =
            "El usuario ya está registrado. Por favor, elige otro nombre de usuario. O" +
            "<a href='#'> Inicie Sesion</a>";
          repeatedMessage.style.color = "red";
          repeatedMessage.id = "repeatedMessage";
        }
        document
          .querySelector(".registerForm")
          .insertAdjacentElement("beforebegin", repeatedMessage);
        return; // Detener la ejecución si el usuario está repetido
      } else {
        await insertUser(user);
        resetValues();
        push("/inicio_sesion");
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  onMount(() => {
    checkRepeatedUser;
    checkPassword;
    submit;
  });
</script>

<form action="get" class="registerForm" on:submit|preventDefault={submit}>
  <label for="UserName"
    >UserName:
    <input
      bind:value={user.name}
      type="text"
      name="UserName"
      id="UserName"
      required
    />
  </label>

  <label for="Passwd"
    >Password:
    <input
      bind:value={user.password}
      type="password"
      name="Passwd"
      id="Passwd"
      required
    />
  </label>
  <label for="Passwd2"
    >Repeat Password:
    <input
      bind:value={user.password2}
      on:blur={checkPassword}
      type="password"
      name="Passwd2"
      id="Passwd2"
      required
    />
  </label>

  <label for="email"
    >Email:
    <input bind:value={user.email} type="email" name="email" required />
  </label>
  <label for="name"
    >Billing Address:
    <input
      bind:value={user.billingAddress}
      type="text"
      name="billingAddress"
      required
    />
  </label>
  <label for="name"
    >Shipping Address:
    <input
      bind:value={user.shippingAddress}
      type="text"
      name="shippingAddress"
      required
    />
  </label>
  <label for="Country"
    >Country:
    <input bind:value={user.country} type="text" name="Country" required />
  </label>
  <label for="Phone"
    >Phone:
    <input
      bind:value={user.phone}
      type="tel"
      pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
      name="Phone"
      required
    />
  </label>
  <button type="submit" id="submit">Registrarse</button>
</form>

<style>
  @import "./Register.less";
</style>
