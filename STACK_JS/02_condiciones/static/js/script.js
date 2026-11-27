// ✅ Ejercicio 1: Calculadora de Envío
// 📝 Enunciado
// Una empresa de despacho cobra el envío dependiendo del peso del paquete.
// Solicitar: Nombre del cliente y Peso del paquete (kg)
// Condiciones:
// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg
// Mostrar: Nombre del cliente, Categoría del envío y Valor correspondiente al despacho

function ejercicio1() {
    let nombreCliente = prompt("Ingrese el nombre del cliente:");
    let peso = parseFloat(prompt("Ingrese el peso del paquete (en kg):"));

    if (!nombreCliente || nombreCliente.trim() === "" || isNaN(peso) || peso <= 0) {
        alert("⚠️ Error: Debe ingresar un nombre válido y un peso mayor a 0.");
        return;
    }

    let categoria = "";
    let valor = 0;

    if (peso <= 2) {
        categoria = "Envío Ligero";
        valor = 3000;
    } else if (peso > 2 && peso <= 5) {
        categoria = "Envío Estándar";
        valor = 5500;
    } else if (peso > 5 && peso <= 10) {
        categoria = "Envío Pesado";
        valor = 9000;
    } else {
        categoria = "Carga Especial";
        valor = 15000;
    }

    alert(`📦 Resumen de Envío\nCliente: ${nombreCliente}\nCategoría: ${categoria}\nValor a pagar: $${valor}`);
}

// ✅ Ejercicio 2: Acceso a Biblioteca
// 📝 Enunciado
// Dos tipos de usuarios: Estudiante y Profesor
// Solicitar: Tipo de usuario y Cantidad de libros solicitados
// Condiciones: Cada tipo de usuario posee un límite distinto de préstamos.
// Mostrar: Si el préstamo está permitido, si supera el límite y mensaje distinto según usuario.

function ejercicio2() {
    let tipoUsuario = prompt("Ingrese el tipo de usuario (estudiante / profesor):").toLowerCase().trim();
    let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros solicitados:"));

    if ((tipoUsuario !== "estudiante" && tipoUsuario !== "profesor") || isNaN(cantidadLibros) || cantidadLibros <= 0) {
        alert("⚠️ Error: Ingrese 'estudiante' o 'profesor' y una cantidad de libros válida.");
        return;
    }

    // Límite Estudiante: máximo 3 libros | Límite Profesor: máximo 6 libros
    if (tipoUsuario === "estudiante" && cantidadLibros <= 3) {
        alert(`✅ Préstamo permitido (Estudiante). Puedes llevar tus ${cantidadLibros} libro(s) por 7 días.`);
    } else if (tipoUsuario === "estudiante" && cantidadLibros > 3) {
        alert(`❌ Préstamo denegado (Estudiante). Superaste el límite máximo de 3 libros.`);
    } else if (tipoUsuario === "profesor" && cantidadLibros <= 6) {
        alert(`✅ Préstamo permitido (Profesor). Puedes llevar tus ${cantidadLibros} libro(s) por 15 días.`);
    } else {
        alert(`❌ Préstamo denegado (Profesor). Superaste el límite máximo de 6 libros.`);
    }
}

// ✅ Ejercicio 3: Clasificación Deportiva
// 📝 Enunciado
// Solicitar: Nombre del participante y Edad
// Clasificar al participante según su edad (al menos 4 categorías).
// Mostrar: Nombre, Edad y Categoría asignada

function ejercicio3() {
    let nombreParticipante = prompt("Ingrese el nombre del participante:");
    let edad = parseInt(prompt("Ingrese la edad del participante:"));

    if (!nombreParticipante || nombreParticipante.trim() === "" || isNaN(edad) || edad < 5 || edad > 100) {
        alert("⚠️ Error: Ingrese un nombre válido y una edad entre 5 y 100 años.");
        return;
    }

    let categoria = "";

    if (edad >= 5 && edad <= 11) {
        categoria = "Infantil 🧒";
    } else if (edad >= 12 && edad <= 17) {
        categoria = "Juvenil 🏃";
    } else if (edad >= 18 && edad <= 39) {
        categoria = "Adulto 🏅";
    } else {
        categoria = "Senior / Máster 🏆";
    }

    alert(`📋 Ficha Deportiva\nParticipante: ${nombreParticipante}\nEdad: ${edad} años\nCategoría asignada: ${categoria}`);
}

// ✅ Ejercicio 4: Sistema de Bonificación
// 📝 Enunciado
// Solicitar: Nombre del trabajador y Años de servicio
// Clasificar según rangos de antigüedad.
// Mostrar: Nombre, Nivel de antigüedad y Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt("Ingrese el nombre del trabajador:");
    let aniosServicio = parseInt(prompt("Ingrese los años de servicio:"));

    if (!nombreTrabajador || nombreTrabajador.trim() === "" || isNaN(aniosServicio) || aniosServicio < 0) {
        alert("⚠️ Error: Ingrese un nombre válido y años de servicio (0 o más).");
        return;
    }

    let nivelAntiguedad = "";
    let mensajeBono = "";

    if (aniosServicio < 1) {
        nivelAntiguedad = "Nuevo Ingreso";
        mensajeBono = "❌ No recibe bonificación (requiere mínimo 1 año).";
    } else if (aniosServicio >= 1 && aniosServicio <= 3) {
        nivelAntiguedad = "Junior";
        mensajeBono = "✅ Recibe bonificación del 10%.";
    } else if (aniosServicio >= 4 && aniosServicio <= 7) {
        nivelAntiguedad = "Intermedio";
        mensajeBono = "✅ Recibe bonificación del 20%.";
    } else {
        nivelAntiguedad = "Veterano";
        mensajeBono = "🌟 Recibe bonificación máxima del 35%.";
    }

    alert(`💼 Sistema de Bonificación\nTrabajador: ${nombreTrabajador}\nNivel: ${nivelAntiguedad}\nEstado: ${mensajeBono}`);
}

// ✅ Ejercicio 5: Evaluación de Velocidad
// 📝 Enunciado
// Solicitar: Nombre del conductor y Velocidad registrada
// Clasificar la velocidad en rangos y mostrar alerta adicional si supera el límite permitido.
// Mostrar: Nombre del conductor, Velocidad y Clasificación obtenida

function ejercicio5() {
    let nombreConductor = prompt("Ingrese el nombre del conductor:");
    let velocidad = parseFloat(prompt("Ingrese la velocidad registrada (km/h):"));

    if (!nombreConductor || nombreConductor.trim() === "" || isNaN(velocidad) || velocidad < 0) {
        alert("⚠️ Error: Ingrese un nombre válido y una velocidad mayor o igual a 0.");
        return;
    }

    let clasificacion = "";
    let mensaje = "";

    if (velocidad < 40) {
        clasificacion = "Velocidad Baja 🐢";
    } else if (velocidad >= 40 && velocidad <= 80) {
        clasificacion = "Velocidad Óptima 🚗";
    } else if (velocidad > 80 && velocidad <= 100) {
        clasificacion = "Velocidad Alta ⚠️";
    } else {
        clasificacion = "Exceso de Velocidad 🚨";
    }

    mensaje = `🚓 Control de Velocidad\nConductor: ${nombreConductor}\nVelocidad: ${velocidad} km/h\nClasificación: ${clasificacion}`;

    // Alerta adicional si supera el límite máximo permitido (100 km/h)
    if (velocidad > 100) {
        mensaje += `\n\n🛑 ¡ALERTA!: Ha excedido la velocidad permitida (máximo 100 km/h).`;
    }

    alert(mensaje);
}