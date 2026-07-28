console.log("Conexion exitosa")

// Ejemplo funcion simple (sin Parametros)
function saludar() { //Parametros
    alert("¡Hola, bienvenido!");
}

saludar(); //Ejecucion de una funcion


function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}


saludar("Luis");
saludar("Ana");



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


console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);