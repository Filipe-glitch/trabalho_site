function alternarTema() {
    document.body.classList.toggle("dark");
}

function enviarDados() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // na parte de validação eu coloquei um aviso para caso o usuário não digite nada
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos");
        return;
    }

    //verificação de email eu optei por usar @ ou .como diferencias para confirmar o email.
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido!");
        return;
    }
    alert("Mensagem enviada com sucesso!");

    // as três linhas abaixo são para limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}

// um menu que decidi colocar
function toggleMenu() {
    document.querySelector(".menu ul").classList.toggle("ativo");
}