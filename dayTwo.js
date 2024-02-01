function formularioPerguntas() {

    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let programacao = document.getElementById("programacao").value

    let mensagem = "Olá " + nome + " você tem " +idade + " e está aprendendo a linguagem  de programação "+ programacao + " ! "
    let mensagemProg = "Você Gosta de Aprender " + programacao+ "?"
    document.getElementById("mensagemProg").innerHTML = mensagemProg
    document.getElementById("mensagem").innerHTML = mensagem
    
    document.getElementById("perguntaDois").style.display = "block"

}

function responderUsuario(){
    let resposta = document.getElementById("resposta").value
    let mensagemPositiva = "Muito bom! Continue estudando e você terá muito sucesso."
    let mensagemNegativa = "Ahh que pena... Já tentou aprender outras linguagens?"
    let mensagemInvalida = "Digite sim ou não"

   // document.getElementById("mensagemResposta").innerHTML = resposta

    if(resposta.toLowerCase() == "não" || resposta.toLowerCase() == "nao"){
        document.getElementById("mensagemResposta").innerHTML = mensagemNegativa
    }
    else if(resposta.toLowerCase() == "sim"){
        document.getElementById("mensagemResposta").innerHTML = mensagemPositiva
    }
    else{
        document.getElementById("mensagemResposta").innerHTML = mensagemInvalida
    }
}


