<script>
  import {
    obtainSingleProduct,
    updateProductStock,
    updateUserProducts,
  } from "../Api/apiCall";
  import { link, push } from "svelte-spa-router";
  import { objetos } from "../stores";
  import { onMount } from "svelte";
  import { getCookie } from "../Cookies.utils";
  import UserProducts from "../UserProducts/UserProducts.svelte";

  let UserId = getCookie("UserID");
  let articlesArray = [];
  let showArticles = [];
  let totalPrice = 0;
  let user = {
    id: UserId,
    prods: [],
  };

  objetos.subscribe((value) => {
    articlesArray = [...value];
  });

  articlesArray.forEach((obj, i) => {
    obtainSingleProduct(obj.id).then((response) => {
      showArticles[i] = response[0];
      let itemPrice = response[0].price * obj.quantity;
      showArticles[i].quantity = obj.quantity;
      user.prods.push(showArticles[i]);
      totalPrice += itemPrice;
    });
  });

  const mensaje =
    "✅GRACIAS POR COMPRAR EN NUESTRA TIENDA, VUELVE CUANDO QUIERAS✅";

  let visible = false;

  function mostrarDiv() {
    visible = true;
    showArticles = [];
    objetos.set([]);
    setTimeout(() => {
      visible = false;
    }, 3000);
  }

  function orderCompleted() {
    push("#/");
  }

  async function buyArticles() {
    await updateUserProducts(user).catch((error) => error);

    showArticles.forEach(async (boughtArticle) => {
      await updateProductStock(
        boughtArticle._idProd,
        boughtArticle.quantity
      ).then(() => {
        mostrarDiv();
      });
    });
  }

  $: checkShowArticles = showArticles.length < 1 ? false : true;
</script>

{#if visible}
  <div id="confirmationdDiv" on:blur={orderCompleted}>
    <p>{mensaje}</p>
  </div>
{/if}
{#if checkShowArticles}
  <h2 class="cart_title">FINALIZAR COMPRA</h2>
  <div class="cart_articles">
    {#each showArticles as article}
      <div class="cart_article">
        <a href="/product?id={article?._idProd}" use:link
          ><img src={article?.image} alt="" /></a
        >
        <strong><p>{article?.title}</p></strong>
        <p>{article?.price}€</p>
        <div class="article_quantity">{article?.quantity}</div>
      </div>
    {/each}
  </div>
  <h4 class="total_price">PRECIO TOTAL: {totalPrice}€</h4>
  {#if !visible}
    <button on:click={buyArticles} id="submit">COMPRAR</button>
  {/if}
{:else if !visible}
  <h2 class="empty">AÑADE ARTICULOS A TU CESTA 🛒</h2>
{/if}

<style>
  @import "./Cart.less";
</style>
