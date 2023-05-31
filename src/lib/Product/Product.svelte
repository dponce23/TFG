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
    alert("has añadido " + quantity);
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
    </div>
    <div>
      <label for="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        bind:value={quantity}
        readonly
      />
      <button on:click={incrementarCantidad} id="incrementar">+</button>
      <button on:click={decrementarCantidad} id="decrementar">-</button>
    </div>
    {#if authorized}
      <button on:click={addToCart} id="añadir">AÑADIR A LA CESTA</button>
    {:else}
      <p>Para poder Realizar una compra debe Iniciar Sesion</p>
    {/if}
  {/if}
</div>

<style>
  @import "./Product.less";
</style>
