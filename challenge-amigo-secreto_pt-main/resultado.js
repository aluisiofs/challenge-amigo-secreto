function getNomeDaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("nome");
}

function verificarSorteio() {
    const nomeInput = document.getElementById("nomeUsuario");
    const resultadoText = document.getElementById("resultado");

    const nome = getNomeDaURL();

    if (nome) {
        nomeInput.value = nome;
    }

    const sorteio = JSON.parse(localStorage.getItem("sorteioAmigoSecreto")) || {};

    if (!nome || !sorteio[nome]) {
        resultadoText.textContent = "Nome não encontrado no sorteio.";
        return;
    }

    resultadoText.textContent = `Seu amigo secreto é: ${sorteio[nome]}`;
}

// Chama a função automaticamente ao carregar a página
window.onload = verificarSorteio;
