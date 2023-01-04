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
        <div class="banner"><Banner data={productos[0]} /></div>
        <div class="banner"><Banner data={productos[1]} /></div>
    </div>
    <ul class="puntos">
        <li class="punto activo">1</li>
        <li class="punto">2</li>
    </ul>
</div>

<style>
    .carousel {
        width: 100%;
        max-width: 120em;
        overflow: hidden;
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
        width: 2rem;
        height: 2rem;
        margin: 1rem;
        border: 0.16rem solid black;
    }
    .carousel .punto.activo {
        background-color: orange;
    }
    ul {
        list-style-type: none;
    }
</style>
