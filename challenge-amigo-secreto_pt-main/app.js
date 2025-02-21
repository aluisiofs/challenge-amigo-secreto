    //const declaração de variavel(amigos), que contem um array(const)
    // amigos = [] array iniciado em vazio 

    //function adicionarAmuigos define uma nova função chamada adicionarAmigo
    // document.getElementById('amigo') esta se buscando um elemento no DOM DOCUMENT OBJECT MODELcom Id amigo(usuario ira inserir nome do amigo)
    //variavel const amigoInput entrada de dados para manipulação
 
    //amigoInput.value(usado para pegar o valor digitado pelo usuario que é a entrada de dados)
    //trim() é a função que remove os espaços em branco no começo e no final do texto, ajudando digitação correta

    //if (amigo) verifica se valor "amigo" não está vazio, se o usuario digitar nome do amigo, oif entra em ação
    //amigo.push(amigo) método push() para adicionar nome do amigo na array amigos.
    //amigoInput.value = ''; (apos adicionado amigo na lista limpa se o campo de emtrada adiconar ou não mais dados)
    //atualizarListaAmigos()  chama a função atualizarListaAmigos para atualizar a interface do usuario.
    //alert('Por favor, digite um nome válido.') pede ao usario que digite de forma corrta o nome do amigo.
    
    //function atualizarlistaAmigos() função responsavel por atualizar a lista de amigos na interface do usuario
    //const listaAmigos = document.getElemetById('listaAmigos') aqui se esta pegando o elemento DOM com id listaAmigos que é uma lista HTML onde sera exibido os amigos 
    //amigos.map(amigo => <li>${amigo}</li>) usa se metodo map() do array para transformar cada item da lista de amigos emum item de lista HTML (<li><li>)
    //join('') junta todos os itens criados pelo metodo map() emuma unica string, evita concatenação de strings manuais.
 
    //função sortearAmigo vai ser responsavel por realizar o sorteio dos amigos.button-add
    //if (amigos.lenght === 0) ela verifica se a lista de amigos esta vazia , se estiver vazia não faz sorteio
    //alert ('Por favor,adicione amigos na lista antes de sortear!') mostra esse aviso caso lista de amigos esteja vazia 
    // return; caso a lista de amigos esteja vazia, a função sortearAmigo é interrompida.   

    //função const amigos Sorteados = [...amigos]; cria uma copia do array amigos usando operador spread(...) isso faz a alteração doarray original durante sorteio
    //amigosSorteados .map(amigo => {...}): usando map() para iterar sobre a lista de amigos sorteados e gerar um sorteio para cada amigo dentro da função:
    //     Math.floor(MAth.random() * amigo Sorteado.lenght) Gera um numero aleatorio entre 0 e o tamanho da lista, sorteando aleatoriamenmte um amigo
    //     amigoSorteado.splice(index, 1)[0]: A função splice() remove o amigo sorteado da lista. O splice() retorna um array, pegamos o primeiro item com [0].
    //     return \ ${amigo}->${sorteado}` essa é a string resultante da operação de sorteio é retornada no formato  amigo -> sorteado, EX: João -> Masria

    // exibirResultadoSorteio(resultado) Chama se a função exibirResultadoSorteio, passando oresultado do sorteio para ser exibido na interface do usuario;
    
    //function exibirResultadoSorteio(resultado) Esta funçao é responssavel por exibir o resultado do sorteio na interface
    //const resultadoU1 = documenut.getEelmentById('resultado') Pega se o elemento DOM com o id resultado, que deve ser a lista onde os resultados do sorteio serão exibidos
    //resultado.innerHTML = resultado.map(item => <li>${item}</li>).join('') utilizamos o metodo  de map() e join () para ytransformar cada item do array resultado e mum item de lista HTML e atualizar o conteudo da lista no DOM.







