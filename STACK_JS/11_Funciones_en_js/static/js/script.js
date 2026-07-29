console.log("Conexion exitosa")

// Ejemplo funcion simple (sin Parametros)
function saludar() { //Parametros
    alert("¡Hola, bienvenido!");
}

saludar(); //Ejecucion de una funcion


function saludarParam(nombre) {
    alert("¡Hola, " + nombre + "!");
}


saludarParam("Yhojáns");
saludarParam("Gabriel");

// Funciones con return

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);


alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);

//Tarea
/*
Crear una funcion que reciba 3 parametros, a ,b y c.
Debe sumar a+b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
*/


function calcularOperacion(a, b, c) {
return a + b - c;
}