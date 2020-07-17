/*
const nome = "Jorge";
const idade = 12;
const curso = true;
const produto = {produto: "mouse", quantidade: "45"};
const somar = () => 3 + 3;

console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(curso));
console.log(typeof(produto));
console.log(typeof(somar));

const cidade = "São Roque";
const estado = 'SP';
const pais = `BR ${estado}`;

console.log("Minha cidade é: ", cidade);
console.log("Estado: ", estado, "sou daqui");
console.log(`País: ${pais}`);

    INCREMENTO DE VARIÁVEIS
let nota = 8;
let nota2 = 8;

console.log(nota++);
console.log(++nota2);

nota += 1;
*/


function chama() {
    
    // DECLARANDO AS VARIÁVEIS
    const $nome = window.document.getElementById("nome").value;
    const $nota1 = window.document.getElementById("nota1").value;
    const $nota2 = window.document.getElementById("nota2").value;
    const $media = window.document.getElementById("media");
    const $situacao = window.document.getElementById("situacao");
    const $conceito = window.document.getElementById("conceito");

    $situacao.style.textAlign = "center";
    $situacao.style.color = "white";


    if ($nota1 != "" && nota2 != "") {

        const nota1 = Number($nota1);
        const nota2 = Number($nota2);

        $media.value = calcularMedia(nota1, nota2);
        $situacao.value = verificaSituacao($media.value, $situacao);
        $conceito.value = mostrarConceito($media.value);

    } else {
        window.alert("RESOLVI");

    }
    
}


const calcularMedia = (nota1, nota2) => ( nota1 + nota2 ) / 2;


const mostrarConceito = media => {
    if (media >= 0 && media < 3) {
        return "E";

    } else if (media >= 3 && media < 5) {
        return "D";

    } else if (media >=5 && media < 8) {
        return "C";

    } else if (media >= 8 && media < 10) {
        return "B";

    } else if (media == 10) {
        return "A";

    }
}


const verificaSituacao = (media, css) => {
    if (media >= 5 ) {
        css.style.backgroundColor = "green";
        return "APROVADO";
        
    } else {
        css.style.backgroundColor = "red";
        return "REPROVADO";
        
    }
}
