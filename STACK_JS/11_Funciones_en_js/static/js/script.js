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
let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let num3 = parseInt(prompt("Ingrese el tercer numero:"));
let resultado = operaciones(num1, num2, num3);
alert(`La operacion de ${num1} + ${num2} - ${num3} es: ${resultado}`);


/*
Crear una funcion que reciba 1 parametro y permita a traves de un cuble contar hasta este.
Ej: Se recibe el numero 5 y muestra: 1 - 2 - 3 - 4 - 5
*/
let parametro = parseInt(prompt(`Ingrese el limite del contador`));
function contadorNumeros(a) {
    let numeros = []
    for (let i = 1; i <= a; i++) {
        numeros.push(i);

    }
    alert(numeros.join(" -  "))

}
contadorNumeros(parametro)