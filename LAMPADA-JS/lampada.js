function pisca () {
    if (interruptor == true) {
        image_lampada.src= "img/desligada.jpg";

        interruptor = false;


    } else {
        image_lampada.src="img/ligada.jpg";

        interruptor = true;
    }


}

var interruptor = false;


var image_lampada = document.getElementById("lampada");

image_lampada.addEventListener("mouseover", () => image_lampada.src="img/ligada.jpg");

image_lampada.addEventListener("mouseout", () => image_lampada.src="img/desligada.jpg");

image_lampada.addEventListener("click", () => setInterval(pisca, 1000))