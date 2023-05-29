<script>
  import { checkUserAuthorized } from "../Api/apiCall";

  let user = {
    name: "",
    password: "",
  };
  async function comprobarUsuario() {
    let response = await checkUserAuthorized(user);
    if (response) {
      if (response.password === user.password) {
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
      console.log("AUTORIZADO");
    } else {
      console.log("Este usuario no está registrado");
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
  <button type="submit" id="submit">Iniciar Sesion</button>
</form>

<style>
  @import "./Login.less";
</style>
