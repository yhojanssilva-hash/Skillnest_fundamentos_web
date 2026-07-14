function cambiarTexto(){
let titulo ="Hola, Bienvenido";
    if (document.getElementById("titulo").innerText == titulo) 
    document.getElementById("titulo").innerText = "Has cambiado el texto";
      else
        document.getElementById("titulo").innerText = titulo;
    }
console.log("Conexión con js...")
//Ejercicio 1: Calculadora de Envío
//Enunciado
//Una empresa de despacho cobra el envío dependiendo del peso del paquete.

//Solicitar:

//Nombre del cliente
//Peso del paquete (kg)
//Condiciones:

//Hasta 2 kg
//Más de 2 kg y hasta 5 kg
//Más de 5 kg y hasta 10 kg
//Más de 10 kg
//El programa debe indicar:

//Nombre del cliente
//Categoría del envío
//Valor correspondiente al despacho
function ejercicio1 () {
    let NombreCliente = prompt("Ingresar el nombre del cliente")
    let peso = parseInt(prompt("Ingresar peso de paquete"))
    let valorDespacho = 2000;
    let mensaje = "";
    // condiciones
    if (peso > 0 && peso < 2 ){
        mensaje = `Paqute pesa menos de 2kgs
        \nValor despacho $${valorDespacho * peso}`
    }else if (peso > 2 && peso <= 5) {
        mensaje = `Paqute pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else if (peso > 5 && peso < 10) {
    mensaje = `paquete pesa: ${peso}
    \nvalor despacho $${valorDespacho * peso}`
    }else if (peso > 10 && peso < 50) {
    mensaje = `paquete pesa: ${peso}
    \nvalor despacho $${valorDespacho * peso}`
}
    alert(mensaje);
}







//Ejercicio 2: Acceso a Biblioteca
//Enunciado
//Una biblioteca posee dos tipos de usuarios:

//Estudiante
//Profesor
//Solicitar:

//Tipo de usuario
//Cantidad de libros solicitados
//Condiciones:

//Cada tipo de usuario posee un límite distinto de préstamos.

//El programa debe indicar:

//Si el préstamo está permitido.
//Si supera el límite permitido.
//Mostrar un mensaje diferente según el tipo de usuario.
//Utilizar operadores lógicos para realizar las validaciones.
function ejercicio2 () {
    let usuario = prompt("Ingrese el tipo de usuario (Estudiante o Profesor):");
    let CantidadDeLibros = parseInt(prompt("¿Cuantos libros deseas solicitar?"));
    let mensaje= "";

    let límiteEstudiante = "3"
    let límiteProfesor = "5"
    if(usuario == "Estudiante" && CantidadDeLibros <= límiteEstudiante){
        mensaje ="Préstamo Permitido. ¡Disfruta tus lecturas, Estudiante!"

    }else if(usuario == "Estudiante" && CantidadDeLibros > límiteEstudiante){
    mensaje = "Préstamo denegado. Superas el limite permitido para estudiante"

    // Caso del profesor
    }else if(usuario == "Profesor" && CantidadDeLibros <= límiteProfesor){
    mensaje =  "Préstamo Permitido. ¡Disfruta tus lecturas, Profesor!"
    }else if (usuario == "Profesor" && CantidadDeLibros > límiteProfesor){
    mensaje = "Préstamo denegado. Superas el limite permitido para el profesor"
    }      
    alert (mensaje);
}


//Ejercicio 3: Clasificación Deportiva
//Enunciado
//Solicitar:

//Nombre del participante
//Edad
//Clasificar al participante según su edad.

//Debe existir al menos cuatro categorías distintas.

//Finalmente mostrar:

//Nombre
//Edad
//Categoría asignada

function ejercicio3 () {
    let nombre = prompt("Ingrese el nombre del participante:");
    let Edad = parseInt(prompt("Ingrese la edad del participante:"));
    let categoria = "";
    if(Edad < 12){
        mensaje ="Préstamo Permitido. ¡Disfruta tus lecturas, Estudiante!"

    }else if(usuario == "Estudiante" && CantidadDeLibros > límiteEstudiante){
    mensaje = "Préstamo denegado. Superas el limite permitido para estudiante"

    // Caso del profesor
    }else if(usuario == "Profesor" && CantidadDeLibros <= límiteProfesor){
    mensaje =  "Préstamo Permitido. ¡Disfruta tus lecturas, Profesor!"
    }else if (usuario == "Profesor" && CantidadDeLibros > límiteProfesor){
    mensaje = "Préstamo denegado. Superas el limite permitido para el profesor"
    }      
    alert (mensaje);
}


//Ejercicio 4: Sistema de Bonificación
//Enunciado
//Una empresa entrega bonos según los años trabajados.

//Solicitar:

//Nombre del trabajador
//Años de servicio
//Clasificar según distintos rangos de antigüedad.

//Mostrar:

//Nombre
//Nivel de antigüedad
//Mensaje indicando si recibe o no bonificación.

// Ejercicio 4: Sistema de Bonificación
function ejercicio4() {
    // 1. Solicitar los datos al usuario
    let nombre = prompt("Ingrese el nombre del trabajador:");
    let añosServicio = parseInt(prompt("Ingrese los años de servicio:"));
    
    // Variables para guardar la clasificación y el estado del bono
    let nivelAntiguedad = "";
    let recibeBono = "";

    
    if (añosServicio < 2) {
        nivelAntiguedad = "Novato";
        recibeBono = "No recibe bonificación.";
    } else if (anosServicio >= 2 && anosServicio <= 5) {
        nivelAntiguedad = "Intermedio";
        recibeBono = "¡Sí recibe bonificación por antigüedad intermedia!";
    } else if (anosServicio > 5) {
        nivelAntiguedad = "Veterano";
        recibeBono = "¡Sí recibe bonificación máxima por alta antigüedad!";
    } else {
        nivelAntiguedad = "Desconocido";
        recibeBono = "Datos inválidos.";
    }

    
    alert("Nombre: " + nombre + 
        "\nNivel de antigüedad: " + nivelAntiguedad + 
    "\nEstado: " + recibeBono);
}

//Ejercicio 5: Evaluación de Velocidad
//Enunciado
//Solicitar:

//Nombre del conductor
//Velocidad registrada
//Condiciones:

//Clasificar la velocidad en distintos rangos.

//Además:

//Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

//Mostrar:

//Nombre del conductor
//Velocidad
//Clasificación obtenida

// Ejercicio 5: Evaluación de Velocidad
// Ejercicio 5: Evaluación de Velocidad
function evaluarVelocidad() {
    let conductor = prompt("Ingrese el nombre del conductor:");
    let velocidad = parseFloat(prompt("Ingrese la velocidad registrada (en km/h):"));
    let clasificacion = "";
    let mensajeExceso = "";

    
    if (velocidad >= 0 && velocidad <= 30) {
        clasificacion = "Baja (Zona residencial / escolar)";
    } else if (velocidad > 30 && velocidad <= 50) {
        clasificacion = "Normal (Zona urbana)";
    } else if (velocidad > 50 && velocidad <= 100) {
        clasificacion = "Alta (Autopista / Carretera)";
    } else if (velocidad > 100) {
        clasificacion = "Muy Alta (Peligrosa)";
    } else {
        clasificacion = "Velocidad no válida";
    }

    // Alerta adicional independiente si supera el límite permitido (ej: 120 km/h)
    if (velocidad > 120) {
        mensajeExceso = "\n⚠️ ¡ALERTA!: Ha excedido el límite máximo de velocidad permitida.";
    }

    // Mostrar el resultado final
    let mensajeFinal = "Conductor: " + conductor + 
        "\nVelocidad: " + velocidad + " km/h" + 
        "\nClasificación: " + clasificacion + 
        mensajeExceso;

    alert(mensajeFinal);
}