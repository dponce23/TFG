<script>
    import { onMount } from "svelte";
    import Banner from "../Banner/Banner.svelte";
<<<<<<< HEAD
    import { obtenerProductos } from "../Api/apiCall";
    let productos = [];
=======
    import { obtainProducts } from "../apiTest";
    let products = [];
>>>>>>> main
    const moveBanner = () => {
        const big = document.querySelector(".big");
        const dots = document.querySelectorAll(".dot");

        dots.forEach((eachDot, i) => {
            eachDot.addEventListener("click", () => {
                let pos = i;
                let operation = pos * -50;

                // @ts-ignore
                big.style.transform = `translateX(${operation}%)`;
                dots.forEach((eachDot, i) => {
                    dots[i].classList.remove("active");
                });
                dots[i].classList.add("active");
            });
        });
    };
    try {
        obtainProducts().then((prods) => {
            products[0] = prods[0];
            products[1] = prods[1];
        });
    } catch (e) {
        console.log(e);
    }
    onMount(moveBanner);
</script>

<div class="carousel">
    <div class="big">
        {#each products as prod}
            <div class="banner"><Banner data={prod} /></div>
        {/each}
    </div>
    <ul class="dots">
        <li class="dot active" />
        <li class="dot" />
    </ul>
</div>

<style>
    @import "./BannerCarousel.less";
</style>
