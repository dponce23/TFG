<script>
  import { checkUserAuthorized } from "../Api/apiCall";
  import { setCookie } from "../Cookies.utils";
  let userID;

  let user = {
    name: "",
    password: "",
  };
  async function comprobarUsuario() {
    let response = await checkUserAuthorized(user);
    if (response) {
      if (response.password === user.password) {
        userID = response._id;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async function submit() {
    let isAuthorized;
    await comprobarUsuario().then((result) => {
      isAuthorized = result;
    });

    if (isAuthorized) {
      setCookie("UserID", userID);
      window.location.href = "/";
    } else {
      window.alert("Nombre de usuario o contraseña incorrectos");
    }
  }
</script>

<form action="get" class="loginForm" on:submit|preventDefault={submit}>
  <label for="UserName"
    >UserName:
    <input
      on:blur={comprobarUsuario}
      bind:value={user.name}
      type="text"
      name="UserName"
      required
    />
  </label>

  <label for="Passwd"
    >Password:
    <input bind:value={user.password} type="password" name="Passwd" required />
  </label>
  <button type="submit" class="login_button">Iniciar Sesion</button>
</form>

<style>
  @import "./Login.less";
</style>
