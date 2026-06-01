let alterado = false;

function alterarTexto() {

    const mensagem = document.getElementById("mensagem");

    if (alterado === false) {

        mensagem.innerText =
        "Texto alterado com sucesso através da manipulação do DOM!";

        alterado = true;

    } else {

        mensagem.innerText =
        "Este texto será alterado.";

        alterado = false;

    }
}