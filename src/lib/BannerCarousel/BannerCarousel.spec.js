import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/svelte'
import "@testing-library/jest-dom"
import BannerCarousel from './BannerCarousel.svelte'

describe("Tests del componente Banner Carousel", () => {

    it("Muestra los componentes que se han renderizado", () => {
        render(BannerCarousel)
        const carousel = document.querySelector(".carousel");
        const puntos = document.querySelector(".puntos");
        expect(carousel).toBeInTheDocument();
        expect(puntos).toBeInTheDocument();
    })
    it("El Carousel cambia de imagen y el punto marcado cambia al hacer click", () => {
        render(BannerCarousel)
        const contenedorGrande = document.querySelector(".grande")
        const puntos = document.querySelectorAll(".punto");

        //Ejecuto el evento click para comprobar que se cambian la clase del punto y la posición del carousel
        fireEvent.click(puntos[1])
        const claseSegundoPunto = puntos[1].getAttribute("class")
        const estiloCG = window.getComputedStyle(contenedorGrande)
        const posCG = estiloCG.getPropertyValue("transform")

        expect(posCG).to.be.equal("translateX(-50%)")
        expect(claseSegundoPunto).to.be.equal("punto activo")
    })
})