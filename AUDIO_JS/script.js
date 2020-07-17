const botaoR = document.querySelector('#botaoR');

botaoR.addEventListener('keypress', function(evento){
    const audio = document.querySelector('#som');

    console.log(evento.keyCode);

    if(evento.keyCode == 114) {

        audio.currentTime = 0.1;
        audio.play()
    }
}); 


const botaoO = document.querySelector('#botaoO');

botaoO.addEventListener('keypress', function(eventoO){
    const audioO = document.querySelector('#som1');

    // console.log(evento.keyCode);

    if(eventoO.keyCode == 111) {

        audioO.currentTime = 0.1;
        audioO.play()
    }
}); 


const botaoD = document.querySelector('#botaoD');

botaoD.addEventListener('keypress', function(eventoD){
    const audioD = document.querySelector('#som2');

    if(eventoD.keyCode == 100) {

        audioD.currentTime = 0.1;
        audioD.play()
    }
}); 

const botaoH = document.querySelector('#botaoH');

botaoH.addEventListener('keypress', function(eventoH){
    const audioH = document.querySelector('#som3');

    if(eventoH.keyCode == 104) {

        audioH.currentTime = 0.1;
        audioH.play()
    }
}); 


const botaoI = document.querySelector('#botaoI');

botaoI.addEventListener('keypress', function(eventoI){
    const audioI = document.querySelector('#som4');

    if(eventoI.keyCode == 105) {

        audioI.currentTime = 0.1;
        audioI.play()
    }
}); 


const botaoG = document.querySelector('#botaoG');

botaoG.addEventListener('keypress', function(eventoG){
    const audioG = document.querySelector('#som5');

    if(eventoG.keyCode == 103) {

        audioG.currentTime = 0.1;
        audioG.play()
    }
}); 

const botaoS = document.querySelector('#botaoS');

botaoS.addEventListener('keypress', function(eventoS){
    const audioS = document.querySelector('#som6');

    if(eventoS.keyCode == 115) {

        audioS.currentTime = 0.1;
        audioS.play()
    }
}); 


