let listaDeNumerosSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2})
}

function exibirMensagemInicial() { // função pra exibir mensagem inicial do jogo, essa é  a primeira função sendo chamada e por ser ela :
                                    // a primeira função chamada, colocamos aqui a impressão do numero aleatorio valido para visualisarmos antes de qualquer tentativa, assim ganhamos tempo em nossos testes
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    console.log(`numero escolhi éxistentes na lista ${listaDeNumerosSorteado}` ); // imprimi o numero aleatorio que ainda não foi chamado
    // responsiveVoice.speak("bem vindo ao game","Brazilian Portuguese Female",{rate:1.2});

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
       

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');          
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');           
             }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    if(listaDeNumerosSorteado.length == 3){
        listaDeNumerosSorteado=[];
    }
    if(listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteado.push(numeroEscolhido);
         return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







