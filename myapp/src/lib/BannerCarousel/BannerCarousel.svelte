<script>
    import { onMount } from "svelte";
    import { query_selector_all } from "svelte/internal";
    import Banner from "../Banner/Banner.svelte";
    import { productos } from "../data-mock.json";

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
    onMount(moveBanner);
</script>

<div class="carousel">
    <div class="grande">
        {#each productos as prod}
            {#if prod.exclusivo}
                <div class="banner"><Banner data={prod} /></div>
            {/if}
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
