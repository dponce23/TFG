<script>
  import { setCookie, getCookie } from "../Cookies.utils";
  import { obtainSingleProduct } from "../Api/apiCall";
  import { guardarObjeto, objetos } from "../stores";

  const authorized = getCookie("UserID") ? true : false;
  const initialPos = window.location.href.indexOf("=", 0) + 1;
  let quantity = 1;
  let prodId = window.location.href.substring(
    initialPos,
    window.location.href.length
  );
  let productInfo = {};
  let loading = true;

  try {
    obtainSingleProduct(prodId).then((response) => {
      productInfo = response;
      loading = false;
    });
  } catch (e) {
    console.log(e);
  }

  function incrementarCantidad() {
    quantity++;
  }
  function decrementarCantidad() {
    if (quantity > 1) {
      quantity--;
    } else {
      alert("no se pueden elegir menos");
    }
  }

  function addToCart() {
    const article = { id: prodId, quantity: quantity };
    guardarObjeto(article);
    alert("HAS AÑADIDO " + quantity + " PRODUCTO/S A TU CESTA");
  }
</script>

<div>
  {#if loading}
    <div>Loading...</div>
  {:else}
    <div class="prod_container">
      <p class="prod_title">{productInfo[0].title}</p>
      <img src={productInfo[0].image} alt="" />
      <p class="prod_description">{productInfo[0].description}</p>

      {#if authorized}
        <div class="quantity_input">
          <label for="quantity">Cantidad:</label>
          <button on:click={incrementarCantidad} id="incrementar">+</button>
          <input
            type="number"
            id="quantity"
            min="1"
            bind:value={quantity}
            readonly
          />

          <button on:click={decrementarCantidad} id="decrementar">-</button>
        </div>

        <button on:click={addToCart} id="aniadir">AÑADIR A LA CESTA</button>
      {:else}
        <p class="noAuthorized">
          Para poder Realizar una compra debe Iniciar Sesion
        </p>
      {/if}
    </div>
  {/if}
</div>

<style>
  @import "./Product.less";
</style>
