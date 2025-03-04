function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim().toUpperCase();
    const idade = parseInt(document.getElementById('idade').value);
    const dataNascimento = document.getElementById('dataNascimento').value;

    const idadeCalculada = calcularIdade(dataNascimento);

    if (idade !== idadeCalculada) {
        alert("A idade não corresponde à data de nascimento.");
        return;
    }

    localStorage.setItem('usuario', JSON.stringify({ nome, idade, dataNascimento }));

    const paginaAnterior = localStorage.getItem('paginaAnterior');
    console.log("Página anterior:", paginaAnterior);
    if (paginaAnterior === 'resultado') {
        window.location.href = 'resultado.html';
    } else {
        window.location.href = 'index.html';
    }
});