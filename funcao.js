document.addEventListener("DOMContentLoaded", function () {
    const paragrafos = document.querySelectorAll(".escondido");
    const botoes = document.querySelectorAll("button.mostrar");

    botoes.forEach((btn, index) => {
        const paragrafo = paragrafos[index];
        paragrafo.classList.remove("mostrar-paragrafo"); // garantir escondido

        btn.addEventListener("click", function () {
            paragrafo.classList.toggle("mostrar-paragrafo");
        });
    });
});