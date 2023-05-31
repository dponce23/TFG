<script>
  import { obtainSingleUser } from "../Api/apiCall";
  import { getCookie } from "../Cookies.utils";
  import ProductListing from "../Product/ProductListing.svelte";

  let myProds = [];
  let user = {
    id: getCookie("UserID"),
  };

  obtainSingleUser(user).then((response) => {
    response.myProducts.forEach((prod, i) => {
      myProds[i] = prod;
    });
  });
</script>

<ProductListing products={myProds} />
