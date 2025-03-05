function verificarSorteio() {
    const nomeInput = document.getElementById("nomeUsuario");
    const resultadoText = document.getElementById("resultado");
    const nome = nomeInput.value.trim().toUpperCase();

    try {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario")).nome;
        const sorteio = JSON.parse(localStorage.getItem("sorteioAmigoSecreto")) || {};
        const visualizado = JSON.parse(localStorage.getItem("amigoSecretoVisualizado")) || {};

        console.log("Nome do usuário:", nome);
        console.log("Usuário logado:", usuarioLogado);
        console.log("Sorteio:", sorteio);
        console.log("Visualizado:", visualizado);

        if (nome !== usuarioLogado) {
            resultadoText.textContent = "Você não pode ver o amigo secreto de outra pessoa.";
            return;
        }

        if (!nome || !sorteio[nome]) {
            resultadoText.textContent = "Nome não encontrado no sorteio.";
            return;
        }

        if (visualizado[nome]) {
            resultadoText.textContent = "Você já visualizou seu amigo secreto. Faça logout para ver novamente.";
            return;
        }

        // Encontrar o amigo secreto correto
        let amigoSecreto = "";
        for (const amigo in sorteio) {
            if (amigo === nome) {
                amigoSecreto = sorteio[amigo];
                break;
            }
        }

        resultadoText.textContent = `Seu amigo secreto é: ${amigoSecreto}`;

        visualizado[nome] = true;
        localStorage.setItem("amigoSecretoVisualizado", JSON.stringify(visualizado));
    } catch (error) {
        console.error("Erro ao verificar sorteio:", error);
        resultadoText.textContent = "Ocorreu um erro. Tente novamente mais tarde.";
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}