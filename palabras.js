
/* /// dibuja el pizarron /// */

function dibujarCanvas(){
    tablero.lineWidth = 4;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8a3871";

    tablero.fillRect(0,0,600,400);
    tablero.beginPath();
    tablero.moveTo(300,200);
    tablero.lineTo(400,200);
    tablero.stroke();
    tablero.closePath();
}


/* /// Agregar palabra /// */

function guardarPalabra(){
    let paraAgregar = document.querySelector("#nuevaPalabra").value;
    palabras.push(paraAgregar);
    console.log(palabras);
}