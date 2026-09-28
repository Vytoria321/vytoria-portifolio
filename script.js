
// ======================================
// ABRIR A POKÉDEX
// ======================================

function abrirPokedex() {

    window.location.href = "pokedex/index.html";

}


// ======================================
// ABRIR OUTROS PROJETOS
// ======================================

function abrirProjeto(projeto) {

    if (projeto === "catalogo") {

        alert("O projeto Catálogo de Games será adicionado em breve.");

    }

    else if (projeto === "biblioteca") {

        alert("O projeto Biblioteca Digital será adicionado em breve.");

    }

    else if (projeto === "biorenova") {

        alert("O projeto BioRenova será adicionado em breve.");

    }

}


// ======================================
// FORMULÁRIO
// ======================================

function enviarFormulario(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;


    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");

        return;

    }


    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Nome: " + nome +
        "\nE-mail: " + email
    );


    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

}


// ======================================
// CONSOLE
// ======================================

console.log("Portfólio carregado com sucesso!");

