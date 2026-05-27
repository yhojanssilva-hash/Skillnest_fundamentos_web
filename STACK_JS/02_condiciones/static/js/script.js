//✅ Ejercicio 1: Sistema de descuento
//📝 Enunciado
//Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar

function ejercicio1() {
    let nombreCliente = prompt("Ingrese su nombre:");
    let montoCompra = parseInt(prompt("Ingrese el monto de su compra:"));
    let descuento = 0;
    if (montoCompra >= 50000) {
        descuento = 0.20;
        alert(`${nombreCliente} Has obtenido un descuento del 20%. el nuevo monto a pagar es: $${montoCompra * (1 - descuento)}`);
    }
    else if (montoCompra >= 30000) {
        descuento = 0.10;
        alert(`${nombreCliente} Has obtenido un descuento del 10%. el nuevo monto a pagar es: $${montoCompra * (1 - descuento)}`);
    }
    else {
        alert(`${nombreCliente} No has obtenido ningún descuento. el monto a pagar es: $${montoCompra}`);
    }
}

//✅ Ejercicio 2: Acceso a evento
//📝 Enunciado
//Una persona puede ingresar a un evento si:
//Tiene 18 años o más
//  O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:    
// “Acceso permitido”
// o “Acceso denegado”

function ejercicio2() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let acompañado = prompt("¿Viene acompañado por un adulto? (si/no):").toLowerCase();

    if (edad >= 18 ) {
        alert("Acceso permitido");
    } 
    else if (acompañado === "si") {
        alert("Acceso permitido");
    }
    else {
        alert("Acceso denegado");
    }
}

// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.

function ejercicio3() {
    let temperatura = parseInt(prompt("Ingrese la temperatura:"));
    if (temperatura < 10) {
        alert("Hace frío🥶");
    } else if (temperatura <= 24) {
        alert("Temperatura agradable🏖");
    } else if (temperatura > 35){
        alert("Temperatura extrema🔥");
    } else {
        alert("Hace calor☀");
    }
}

// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”

function ejercicio4() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

    if (usuario === "admin" && contraseña === "12345") {
        alert("Bienvenido administrador");
    } else if (usuario === "admin") {
        alert("Contraseña incorrecta");
    } else {
        alert("Usuario no encontrado");
    }
}

// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
// Además:
// Si alguna nota es menor a 2.0 mostrar:
//  “Debe asistir a reforzamiento”.

function ejercicio5() {
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    let nota1 = parseInt(prompt("Ingrese la nota 1:"));
    let nota2 = parseInt(prompt("Ingrese la nota 2:"));
    let nota3 = parseInt(prompt("Ingrese la nota 3:"));
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6.0 && (nota1 < 2.0 || nota2 < 2.0 || nota3 < 2.0)) {
        alert(`${nombreEstudiante} Aprobado con excelencia pero debe asistir a reforzamiento😉`);
    } else if (promedio >= 6.0) {
        alert(`¡${nombreEstudiante} Aprobado con excelencia!🤩`);
    } else if (promedio >= 4.0 && (nota1 <= 2.0 || nota2 <= 2.0 || nota3 <= 2.0)) {
        alert(`${nombreEstudiante} Aprobado pero debe asistir a reforzamiento😬`);
    } 
    else if (promedio >= 4.0) {
        alert(`${nombreEstudiante} Aprobado🙂`);
    }
    else {
        alert(`${nombreEstudiante} Reprobado y debe asistir a reforzamiento😞`);
    }
}
