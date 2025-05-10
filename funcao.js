document.addEventListener("DOMContentLoaded", () => {
    // Mostrar subgrupo ao clicar no botão principal
    const botoesPrincipais = document.querySelectorAll("button.mostrar");
    botoesPrincipais.forEach(botao => {
        botao.addEventListener("click", () => {
            const subgrupo = botao.nextElementSibling;
            subgrupo.classList.toggle("mostrar-paragrafo");
        });
    });

    // Mostrar parágrafos ao clicar nos sub-botões
    const botoesSub = document.querySelectorAll("button.mostrar-sub");
    botoesSub.forEach(botao => {
        botao.addEventListener("click", () => {
            const paragrafo = botao.nextElementSibling;
            paragrafo.classList.toggle("mostrar-paragrafo");
        });
    });
});
