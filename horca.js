
/* // botones pagina inicial // */

function iniciarJuego(){
    document.getElementById("pagina-inicial").style.display="none";
    document.getElementById("pagina-juego").style.display="block";
}

function agregarPalabra(){
    document.getElementById("pagina-inicial").style.display="none";
    document.getElementById("pagina-agregar").style.display="block";
}

function volverInicio(){
    document.getElementById("pagina-inicial").style.display="block";
    document.getElementById("pagina-agregar").style.display="none";
    document.getElementById("pagina-juego").style.display="none";
    location.reload(true);
}


/* /// botones pagina juego /// */

let palabras = ["ARGENTINA","BRASIL","PERU","CHILE","URUGUAY","BOLIVIA","PARAGUAY"]
//let tablero = document.getElementById("dibujo").getContext("2d");
let palabrarandom="";
let palabrasecreta=[];
let beta = [];
let numintentos = 6;
let intento = "";

function elegirPalabra(){
    let palabraAleatoria = Math.floor(Math.random() * palabras.length);
    palabrarandom = palabras[palabraAleatoria];
    document.getElementById("numintentos").innerHTML = "Intento numero: " + numintentos;

    for (let i=0; i<palabrarandom.length;i++){
        beta.push('_');
        //beta = palabrarandom.replace(/\D/ig,"_");                      
    }
    palabrasecreta = palabrarandom.split('');

    console.log(beta)
    console.log(palabrarandom);
    console.log(numintentos);

}

function esconder(){
    document.getElementById("incognita").innerHTML = beta;
}

function nuevoJuego(){
    elegirPalabra();
    //dibujarCanvas();
    //dibujarLinea();
    esconder();
}

function elegirLetra(asd){
    //crearTablero()
    intento = asd.value
    comprobarLetra(intento);
    asd.classList.add("tablero2");
    cambiarImagen();

    console.log(intento);       
    console.log(numintentos);

}

function comprobarLetra(){
        let letraElegida = intento;

        for (let i = 0; i < palabrasecreta.length;i++) {
            if (letraElegida == palabrasecreta[i]) {
                beta[i] = letraElegida;
            } console.log(letraElegida);
        }
        if (!palabrasecreta.includes(letraElegida)) {
            numintentos -= 1;
        }
        console.log(palabrasecreta);
        console.log(beta);
        terminarJuego();

        esconder();

        cambiarImagen();
}

function terminarJuego () {
    if (!beta.includes('_')) {
        const ganador = "<p>¡Felicitaciones, Ganaste!</p>"
        document.getElementById("mensajefinal").innerHTML=ganador;
        //alert('Has ganado!!!');
            //location.reload(true);
    }
    if (numintentos == 0) {
        const perdedor = "<p>¡Lastima! la respuesta era + palabrasecreta.join('') </p>"
        const imgfin = "<img src=img/findejuego.png class='imgHorca'>"
        document.getElementById("imagen").innerHTML= imgfin;
        document.getElementById("mensajefinal").innerHTML=perdedor;
        //alert('Has Perdido!!! Era: ' + palabrasecreta.join(''));
            //location.reload(true);
    }
}

function cambiarImagen(){
    const imgInicio = "<img src=img/5intentos.png class='imgHorca'>"
    const imgcabeza = "<img src=img/4intentos.png class='imgHorca'>"
    const img1brazo = "<img src=img/3intentos.png class='imgHorca'>"
    const img2brazo = "<img src=img/2intentos.png class='imgHorca'>"
    const img1pie = "<img src=img/1intento.png class='imgHorca'>"
    const img2pie = "<img src=img/0intentos.png class='imgHorca'>"
    const imgfin = "<img src=img/findejuego.png class='imgHorca'>"

    if(numintentos==6){
        document.getElementById("imagen").innerHTML= imgInicio;
    }
    if(numintentos==5){
        document.getElementById("imagen").innerHTML= imgcabeza;
    }
    if(numintentos==4){
        document.getElementById("imagen").innerHTML= img1brazo;
    }
    if(numintentos==3){
        document.getElementById("imagen").innerHTML= img2brazo;
    }
    if(numintentos==2){
        document.getElementById("imagen").innerHTML= img1pie;
    }
    if(numintentos==1){
        document.getElementById("imagen").innerHTML= img2pie;
    }
    if(numintentos==0){
        document.getElementById("imagen").innerHTML= imgfin;
    }
}


