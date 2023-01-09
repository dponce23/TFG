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
    <div>
        <p>
            Esta obra está bajo una
            <a
                rel="license"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                >licencia de Creative Commons:</a
            ><br />
            <a
                rel="license"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                ><img
                    alt="Licencia de Creative Commons"
                    src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                /></a
            >
        </p>
    </div>
    <div>
        <ul class="lista">
            <li><a href="#/politica_privacidad">Política de Privacidad</a></li>
            <li><a href="#/aviso_legal">Aviso Legal</a></li>
            <li><a href="#/politica_cookies">Politica de Cookies</a></li>
        </ul>
    </div>
    <div>
        <ul class="lista">
            <li>
                <a href="#"
                    ><img
                        src="/src/assets/iconos_redes_sociales/facebook.png"
                        alt="facebook"
                    /></a
                >
            </li>
            <li>
                <a href="#"
                    ><img
                        src="/src/assets/iconos_redes_sociales/instagram.png"
                        alt="instagram"
                    /></a
                >
            </li>
            <li>
                <a href="#"
                    ><img
                        src="/src/assets/iconos_redes_sociales/twitter.png"
                        alt="twitter"
                    /></a
                >
            </li>
        </ul>
    </div>
</div>

<style>
    .contenedor {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
    }
    .lista {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }
    li {
        margin: 1rem;
    }
    .lista img {
        width: 2rem;
        height: 2rem;
    }
    p img {
        width: 8rem;
        height: 3rem;
    }
    p {
        padding: 1rem;
    }
</style>
