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
    .carousel {
        width: 100%;
        max-width: 120em;
        overflow: hidden;
        background-color: rgb(144, 144, 144);
    }
    .carousel .grande {
        width: 200%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.5s ease;
    }
    .carousel .banner {
        width: calc(100% / 2);
    }
    .carousel .puntos {
        width: 100%;
        padding: 0.5rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .carousel .punto {
        width: 1rem;
        height: 1rem;
        margin: 1rem;
        border: 0.16rem solid black;
        border-radius: 0.7rem;
    }
    .carousel .punto.activo {
        background-color: orange;
    }
    ul {
        list-style-type: none;
    }
</style>
