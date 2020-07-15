//Pegando o nome Digitado
let pegaNome = document.querySelector("#nomeDigitado");

//Pegando os botoões
let btnAdicionar = document.querySelector("#btnAdicionar");
let btnAtualizar = document.querySelector("#btnAtualizar");
let btnExcluir = document.querySelector("#btnExcluir");


//Pegando a Lista 
let lista = document.querySelector("#exibirNomes");

let nomes = JSON.parse(localStorage.getItem("nomes")) || [];

function renderizarNomes () {

    //limpar a listagens de itens antes de renderizar novamente a tela
    lista.innerHTML = "";

    for(nome of nomes) {
        //Criar o item da lista
        let itemLista = document.createElement("li");

        //Add classes no item da lista
        itemLista.setAttribute("class", "listaNomes");

        //Add evento de click no item da lista 
        btnExcluir.onclick = function() {
            deletarNome(this);
        }

        //Cria um texto
        let itemTexto = document.createTextNode(nome);

        //Add o texto no item da lista
        itemLista.appendChild(itemTexto);

        lista.appendChild(itemLista);
    }
}

//Executa a função para rebderizar os nomes
renderizarNomes();

//1-Precisamos escutar o evento clickdo botão
btnAdicionar.onclick = function() {

    //2-Precisamos capturar o valor digitado pelo user no input
    let novoNome = pegaNome.value;

    if(novoNome !== "") {
        //3-Precisamos Atualizar a nova tarefa na lista(array)
    nomes.push(novoNome);

    //Executa a função para rebderizar os nomes
    renderizarNomes();

    //Limpar o input
    pegaNome.value = "";

    //Salva os novos dados no BD
    salvarDadosStorage ();

    } else {
        alert("É necessario digitar um nome ....");
    }
}


function deletarNome (nom) {
    // console.log(nomes.indexOf(nom.textContent));
    //Remove a tarefa do array 
    btnExcluir.onclick = function(){
        nomes.splice(nomes.indexOf(nom.textContent), 1);

        renderizarNomes();

        //Salva os novos dados no BD
        salvarDadosStorage ();
    }
}

function salvarDadosStorage () {
    localStorage.setItem("nomes", JSON.stringify(nomes));
}


