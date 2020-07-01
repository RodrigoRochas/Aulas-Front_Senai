
const $botaoVermelho = document.querySelector('#btnVermelho');
const $botaoVerde = document.querySelector('#btnVerde');
const $botaoAmarelo = document.querySelector('#btnAmarelo');
var imgDesligado = document.querySelector('#desligado');

const $automatico = document.getElementById("btnAuto");
const $img = document.getElementById("desligado");

$botaoVermelho.onclick = function () {
    imgDesligado.setAttribute('src', 'imagens/vermelho.png');
}

$botaoVerde.onclick = function () {
    imgDesligado.setAttribute('src', 'imagens/verde.png');
}

$botaoAmarelo.onclick = function () {
    imgDesligado.setAttribute('src', 'imagens/amarelo.png')
}

let contador = 0;

const imagem = ["imagens/vermelho.png", "imagens/amarelo.png", "imagens/verde.png"];

const automatico = function (){
  stop = setInterval(() => {
        $img.src = imagem[contador];
        cont += 1;
        if (contador == 3) {
              contador = 0;
        }

    }, 300)
}

$automatico.addEventListener('click', automatico);


