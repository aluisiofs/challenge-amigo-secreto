let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim().toUpperCase(); // Converter para maiúsculas
    
        // Validar caracteres especiais
    if (!/^[A-Z\s]+$/.test(nome)) {
        alert("Digite um nome válido (apenas letras e espaços).");
        return;
    }
        
    if (!nome) {
        alert("Digite um nome válido.");
        return;
    }
        
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}
    
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
            
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerAmigo(index);
            
        li.appendChild(botaoRemover);
        lista.appendChild(li);
        
    });
}
    
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}
    
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }
    
        // Verificar se o número de participantes é par
    if (amigos.length % 2 !== 0) {
        alert('É necessário um número par de participantes para realizar o sorteio.');
        return;
    }
    
        // Gerar o sorteio
    const embaralhado = [...amigos].sort(() => Math.random() - 0.5);
    let resultado = {};
        
    for (let i = 0; i < embaralhado.length; i++) {
        const amigoAtual = embaralhado[i];
        const amigoSorteado = embaralhado[(i + 1) % embaralhado.length];
        resultado[amigoAtual] = amigoSorteado;
    }
        
        // Salva no localStorage
    localStorage.setItem("sorteioAmigoSecreto", JSON.stringify(resultado));
    
        // Redireciona para resultado.html
    window.location.href = "resultado.html";
}