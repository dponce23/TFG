<script>
    import { onMount } from "svelte";

    const listeners = () => {
        const links = document.querySelectorAll("li");
        links.forEach((link, i) => {
            link.addEventListener("click", () => {
                window.scrollTo(0, 0);
            });
        });
    };
    onMount(listeners);
</script>

<div class="contenedor">
    <div class="cont_lista">
        <p>
            Esta obra está bajo una licencia de Creative Commons:<br />
            <a
                rel="license"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                ><img
                    class="cc"
                    alt="Licencia de Creative Commons"
                    src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                /></a
            >
        </p>
    </div>
    <div class="cont_lista">
        <a href="#/politica_privacidad">Política de Privacidad</a>
        <a href="#/aviso_legal">Aviso Legal</a>
        <a href="#/politica_cookies">Politica de Cookies</a>
    </div>
    <div class="redes_sociales">
        <a href="#"
            ><img
                src="/src/assets/iconos_redes_sociales/facebook.png"
                alt="facebook"
            /></a
        >

        <a href="#"
            ><img
                src="/src/assets/iconos_redes_sociales/instagram.png"
                alt="instagram"
            /></a
        >

        <a href="#"
            ><img
                src="/src/assets/iconos_redes_sociales/twitter.png"
                alt="twitter"
            /></a
        >
    </div>
</div>

<style>
    @import "./Footer.less";
</style>
