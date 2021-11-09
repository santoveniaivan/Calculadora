
//Declaramos en variable cada boton de nuestra calculadora

let pantalla = 0;
let operacion = "";

let almacen1 = 0;
let almacen2 = 0;


//Creamos las funciones que van a operar en nuestra calculadora

function mostrar (){
  document.getElementById('pantalla').innerHTML = pantalla
}

function pulsarSiete(){
  pantalla = pantalla * 10 + 7
  mostrar()
}

function pulsarOcho(){
  pantalla = pantalla * 10 + 8
  mostrar()
}

function pulsarNueve(){
  pantalla = pantalla * 10 + 9
  mostrar()
}

function pulsarDivision(){

  if (operacion != "division"){
    almacen1 = pantalla
    operacion = "division"
    pantalla = 0
  } else {
    pantalla = almacen1 / pantalla
    operacion = ""
    mostrar()
  }

}

function pulsarMultiplicacion(){

  if (operacion != "multiplicacion"){
    almacen1 = pantalla
    operacion = "multiplicacion"
    pantalla = 0
  } else {
    pantalla = almacen1 * pantalla
    operacion = ""
    mostrar()
  }

}

function pulsarSuma(){

  if (operacion != "sumar"){
    almacen1 = pantalla
    operacion = "sumar"
    pantalla = 0
  } else {
    pantalla = almacen1 + pantalla
    operacion = ""
    mostrar()
  }

}

function pulsarResta(){

  if (operacion != "resta"){
    almacen1 = pantalla
    operacion = "resta"
    pantalla = 0
  } else {
    pantalla = almacen1 - pantalla
    operacion = ""
    mostrar()
  }

}
/*
function pulsarIgual(){
  if (operacion == "suma"){
    pantalla = almacen1 + pantalla
    mostrar()
  } else if (operacion == "resta"){
    pantalla = almacen1 - pantalla
    mostrar()
  } else if (operacion == "multiplicacion"){
    pantalla = almacen1 * pantalla
    mostrar()
  } else if (operacion == "division"){
    pantalla = almacen1 / pantalla
    mostrar()
  } else {
    pantalla = 0
    mostrar()
  }
}
*/
function pulsarIgual(){
  if (operacion == "sumar"){
    pulsarSuma()
    mostrar()
  } else if (operacion == "resta"){
    pulsarResta()
    mostrar()
  } else if (operacion == "multiplicacion"){
    pulsarMultiplicacion()
    mostrar()
  } else if (operacion == "division"){
    pulsarDivision()
    mostrar()
  } else {
    pantalla = 0
    mostrar()
  }

}


function pulsarCuatro(){
  pantalla = pantalla * 10 + 4
  mostrar()
}

function pulsarCinco(){
  pantalla = pantalla * 10 + 5
  mostrar()
}

function pulsarSeis(){
  pantalla = pantalla * 10 + 6
  mostrar()
}

function pulsarUno(){
  pantalla = pantalla * 10 + 1
  mostrar()
}

function pulsarDos(){
  pantalla = pantalla * 10 + 2
  mostrar()
}

function pulsarTres(){
  pantalla = pantalla * 10 + 3
  mostrar()
}

function pulsarC(){
pantalla = 0
  mostrar()
}

function pulsarCero(){
  pantalla = pantalla * 10 + 0
  mostrar()
}

//Escuchamos cada boton pulsado para recogerlo

document.getElementById('siete').addEventListener('click',pulsarSiete )
document.getElementById('ocho').addEventListener('click',pulsarOcho )
document.getElementById('nueve').addEventListener('click',pulsarNueve )
document.getElementById('division').addEventListener('click',pulsarDivision )

document.getElementById('cuatro').addEventListener('click',pulsarCuatro )
document.getElementById('cinco').addEventListener('click',pulsarCinco )
document.getElementById('seis').addEventListener('click',pulsarSeis )
document.getElementById('multiplicacion').addEventListener('click',pulsarMultiplicacion )

document.getElementById('uno').addEventListener('click',pulsarUno )
document.getElementById('dos').addEventListener('click',pulsarDos )
document.getElementById('tres').addEventListener('click',pulsarTres )
document.getElementById('resta').addEventListener('click',pulsarResta )

document.getElementById('c').addEventListener('click',pulsarC )
document.getElementById('cero').addEventListener('click',pulsarCero )
document.getElementById('igual').addEventListener('click',pulsarIgual )
document.getElementById('suma').addEventListener('click',pulsarSuma)
mostrar()

