//Instrucciones 
//Resuelve cada ejercicio utilizando for o while, según corresponda. Recuerda probar tu código con console.log() para verificar los resultados. Usa buenas prácticas de programación y mantén tu código bien estructurado.

//🔢 Contador de interacciones en una app: Imagina que una aplicación registra la cantidad de veces que un usuario interactúa con un botón. Escribe un programa que imprima los números del 1 al 10 para simular las interacciones de un usuario. Ejemplo de salida esperada:

//Interacción 1
//Interacción 2
//...
//Interacción 10​​
function ejercicioUno() {
    let terminado = false;
    let i = 1;

    while (!terminado) {
        alert(`Interacción ${i}`);
        i++;
        if (i > 10) {
            terminado = true;
            break;
        }
    }
} 
//⏳ Simular una barra de carga: Crea un programa que simule una barra de carga mostrando porcentajes de progreso del 0% al 100% en incrementos de 10. Ejemplo de salida esperada:

//Cargando... 0%
//Cargando... 10%
//...
//Cargando... 100%
//Carga completa.
function ejercicioDos() {
    let terminado = false;
    let porcentaje = 0;

    while (!terminado) {
        alert(`Cargando... ${porcentaje}%`);
        porcentaje += 10;
        if (porcentaje > 100) {
            terminado = true;
            alert("Carga completa.");
            break;
        }
    }
}

//🛍️ Simulación de descuento progresivo en una tienda: Una tienda en línea ofrece un descuento progresivo en una promoción especial. El primer producto tiene un 5% de descuento, el segundo un 10%, el tercero un 15%, y así sucesivamente hasta el quinto producto con un 25%. Escribe un programa que calcule y muestre los descuentos aplicados a cada producto. Ejemplo de salida esperada:

//Producto 1 - Descuento aplicado: 5%
//Producto 2 - Descuento aplicado: 10%
//Producto 3 - Descuento aplicado: 15%
//Producto 4 - Descuento aplicado: 20%
//Producto 5 - Descuento aplicado: 25%
function ejercicioTres() {
    let terminado = false;
    let producto = 1;
    let precioOriginal = 50000;

    while (!terminado) {
        let porcentajeDescuento = producto * 5;
        let valorDescuento = (precioOriginal * porcentajeDescuento) / 100;
        let totalConDescuento = precioOriginal - valorDescuento;

        alert(`Producto ${producto} = ${precioOriginal} - descuento aplicado : ${porcentajeDescuento}% y el valor total con descuento = ${totalConDescuento}`);
        
        producto++;
        if (producto > 5) {
            terminado = true;
            break;
        }
    }
}
//🎮 Calcular el total de puntos en un videojuego: Un jugador gana 50 puntos cada vez que completa un nivel. Escribe un programa que calcule la puntuación total después de 5 niveles usando un bucle. Ejemplo de salida esperada:

//Puntos acumulados: 250
function ejercicioCuatro() {
    let terminado = false;
    let nivel = 1;
    let puntosTotales = 0;

    while (!terminado) {
        puntosTotales += 50;
        nivel++;
        
        if (nivel > 5) {
            terminado = true;
            alert(`Puntos acumulados: ${puntosTotales}`);
        }
    }
}
//🔔 Contador de notificaciones en una app: Imagina que una aplicación de mensajería muestra un contador de notificaciones pendientes. Escribe un programa que muestre un mensaje con la cantidad de notificaciones pendientes y las marque como leídas una por una hasta llegar a 0. Ejemplo de salida esperada:

//Tienes 5 notificaciones nuevas.
//Tienes 4 notificaciones nuevas.
//...
//Tienes 1 notificación nueva.
//No tienes notificaciones pendientes.
function ejercicioCinco() {
    let terminado = false;
    let notificaciones = 5;

    while (!terminado) {
        if (notificaciones === 1) {
            alert(`Tienes ${notificaciones} notificación nueva.`);
        } else {
            alert(`Tienes ${notificaciones} notificaciones nuevas.`);
        }
        
        notificaciones--;
        
        if (notificaciones === 0) {
            terminado = true;
            alert("No tienes notificaciones pendientes.");
        }
    }
}
//💡 Tips
//✅ Recuerda usar for cuando conozcas la cantidad de repeticiones y while cuando dependas de una condición externa.
//🧪 Usa console.log() para verificar los valores en cada iteración.
//🧹 Mantén tu código organizado y bien indentado para mejorar su legibilidad.
//📚 Contenidos que estás aplicando

//🔁 Bucles for y while para iteraciones controladas y condicionales.
//⚖️ Uso de operadores de comparación para evaluar condiciones.
//🖨️ Aplicación de console.log() para depurar y verificar resultados.
//📦 Manipulación de variables y estructuras de datos.