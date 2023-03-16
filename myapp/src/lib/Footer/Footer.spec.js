import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom"
import Footer from './Footer.svelte';

describe("Tests del footer", () => {
    render(Footer);
    let buttons = document.querySelectorAll(".cont_lista > a")
    let icons = document.querySelectorAll(".redes_sociales > a")
    it("Se renderizan bien los enlaces y los iconos del footer", () => {
        //page links
        let privacyButton = buttons[0];
        let legalButton = buttons[1];
        let cookiesButton = buttons[2];
        //icons
        let facebookIcon = icons[0];
        let instagramIcon = icons[1];
        let twitterIcon = icons[2];

        expect(facebookIcon).toBeInTheDocument()
        expect(instagramIcon).toBeInTheDocument()
        expect(twitterIcon).toBeInTheDocument()
        expect(privacyButton).toBeInTheDocument();
        expect(legalButton).toBeInTheDocument();
        expect(cookiesButton).toBeInTheDocument();
    })
})