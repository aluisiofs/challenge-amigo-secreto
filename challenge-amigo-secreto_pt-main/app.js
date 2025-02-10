// declaração de variavel(amigos), que contem um array(const)
const amigos = []; //array iniciado em vazio 

// function define uma nova função chamada adicionarAmigo
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); //document.getElementById('amigo') esta se buscando um elemento no DOM DOCUMENT OBJECT MODELcom Id amigo(usuario ira inserir nome do amigo)
    //variavel const amigoInput entrada de dados para manipulação
    const amigo = amigoInput.ariaValueMax.trim();
    //amigoInput.value(usado para pegar o valor digitado pelo usuario que é a entrada de dados)
    //trim() é a função que remove os espaços em branco no começo e no final do texto, ajudando digitação correta
    
    if (amigo) {
        amigo.push(amigo);
        amigoInput,value = '';
        atualizarListaAmigos();
    } else {
        alert('Por favor, Digite um nome válido.');
    }
    //if (amigo) verifica se valor "amigo" não está vazio, se o usuario digitar nome do amigo, oif entra em ação
    //amigo.push(amigo) método push() para adicionar nome do amigo na array amigos.
    //amigoInput.value = ''; (apos adicionado amigo na lista limpa se o campo de emtrada adiconar ou não mais dados)
    //atualizarListaAmigos()  chama a função atualizarListaAmigos para atualizar a interface do usuario.
    //alert('Por favor, digite um nome válido.') pede ao usario que digite de forma corrta o nome do amigo.
    
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => <li>${amigo}</li>).join('')
    }

    //function atualizarlistaAmigos() função responsavel por atualizar a lista de amigos na interface do usuario
    //const listaAmigos = document.getElemetById('listaAmigos') aqui se esta pegando o elemento DOM com id listaAmigos que é uma lista HTML onde sera exibido os amigos 
    //amigos.map(amigo => <li>${amigo}</li>) usa se metodo map() do array para transformar cada item da lista de amigos emum item de lista HTML (<li><li>)
    //join('') junta todos os itens criados pelo metodo map() emuma unica string, evita concatenação de strings manuais.

}

