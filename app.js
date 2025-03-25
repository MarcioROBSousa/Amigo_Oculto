//O principal objetivo  deste desafio é fortalecer suas habilidades em lógica de programação.  Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//função para adicionar pessoas
function adicionarAmigo() {
    let amigoNome =  document.querySelector("#amigo").value;
    if (amigoNome === "") {
        alert("Por favor insira um nome");
        return; 
    }
    amigos.push(amigoNome);
    document.querySelector("#amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos .innerHTML="";
    for (let amigo of amigos) {
        listaAmigos.innerHTML += "<li>" + amigo + "</li>";  
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigos.length === 0 )
    {
        alert("Por favor insira um amigo");
        return;
    }
    let sorteado =Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = "<li>" + amigos[sorteado] + "</li>";
    
}
