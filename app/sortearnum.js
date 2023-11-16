const menorValor = 1;
const maiorValor = 100;
const numSecreto = gerarNumSecreto();


function gerarNumSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}
console.log('Número Secreto:', numSecreto);

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor;