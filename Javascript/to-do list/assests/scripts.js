var elcampo = document.getElementById("campo");

var button = document.getElementById("button");

var conteudo = []

button.onclick = function() {

    var campo = elcampo.innerHTML;
    conteudo.push({texto: campo});
}

console.log(conteudo);