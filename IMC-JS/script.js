"use strict";

const calcularImc = (peso , altura) => peso / (altura ** 2);
   
const definirEstado = (imc) => {
    let msg;
    if (imc <= 18.5) {
        let msg = 'abaixo do peso. Atenção !!!';

    } else if (imc <= 24.9) {
        msg = 'peso ideal. Parabens';

    }else if (imc <= 29.9) {
        msg = 'Levemnete acima do peso';

    }else if (imc <= 34.9) {
        msg = 'Obesidade grau 1';

    }else if (imc <= 39.9) {
        msg = 'Obesidade grau 2';

    } else {
        msg = 'Obesidade grau 3';

    }

    return msg;
}




const exibirResultado = () => {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const $resultado = document.getElementById('resultado');

    const imc = calcularImc (peso, altura);
    const estado = definirEstado (imc);

    $resultado.innerHTML = `${nome} seu IMC foi de ${imc} voce esta ${estado}`;

}



document.getElementById('btnCalc')
        .addEventListener('click', exibirResultado);