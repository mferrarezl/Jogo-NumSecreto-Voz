function verificaChute(chute) {
    const numero = +chute;
    
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido!</div>
        `;
        return
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <br>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}!
        `;
        return
    }

    if (numero === numSecreto) {
        document.body.innerHTML = `
        <div>
            <h2>Você acertou!</h2>
            <h3>O número secreto era <span id="acertarNumSecreto">${numSecreto}</span>!</h3>
            <button id="jogar-novamente" class="btn-rejogar">Jogar Novamente</button>
        `;
    } else if (numero > numSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    } else  if ( numero < numSecreto){
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});