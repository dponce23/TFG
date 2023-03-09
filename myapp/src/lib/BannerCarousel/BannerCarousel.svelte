<script>
    import { onMount } from "svelte";
    import Banner from "../Banner/Banner.svelte";
    import { obtenerProductos } from "../Api/apiCall";
    let productos = [];
    const moveBanner = () => {
        const grande = document.querySelector(".grande");
        const puntos = document.querySelectorAll(".punto");

        puntos.forEach((cadaPunto, i) => {
            cadaPunto.addEventListener("click", () => {
                let posicion = i;
                let operacion = posicion * -50;

                // @ts-ignore
                grande.style.transform = `translateX(${operacion}%)`;
                puntos.forEach((cadaPunto, i) => {
                    puntos[i].classList.remove("activo");
                });
                puntos[i].classList.add("activo");
            });
        });
    };
    try {
        obtenerProductos().then((prods) => {
            productos[0] = prods[0];
            productos[1] = prods[1];
        });
    } catch (e) {
        console.log(e);
    }
    onMount(moveBanner);
</script>

<div class="carousel">
    <div class="grande">
        {#each productos as prod}
            <div class="banner"><Banner data={prod} /></div>
        {/each}
    </div>
    <ul class="puntos">
        <li class="punto activo" />
        <li class="punto" />
    </ul>
</div>

<style>
    @import "./BannerCarousel.less";
</style>
