// ===================================================
// document.addEventListener("DOMContentLoaded", ...)
// APUNTE: Le dice al navegador "NO ejecutes JavaScript hasta que todo el HTML
// haya cargado visualmente". Evita errores de "elemento no encontrado".
// ===================================================
document.addEventListener("DOMContentLoaded", () => {

    // ===================================================
    // REQUERIMIENTO 1: HOVER "Envía Flores" -> "Envía Bouquets"
    // APUNTES:
    // 1. document.getElementById("envia-flores"): Captura el elemento con ese ID.
    // 2. mouseenter: Evento cuando el cursor ENTRA al elemento.
    // 3. mouseleave: Evento cuando el cursor SALE del elemento.
    // 4. textContent: Propiedad para cambiar el texto visible dentro de una etiqueta.
    // ===================================================
    const enlaceEnviaFlores = document.getElementById("envia-flores");

    if (enlaceEnviaFlores) {
        enlaceEnviaFlores.addEventListener("mouseenter", () => {
            enlaceEnviaFlores.textContent = "Envía Bouquets";
        });

        enlaceEnviaFlores.addEventListener("mouseleave", () => {
            enlaceEnviaFlores.textContent = "Envía Flores";
        });
    }

    // ===================================================
    // REQUERIMIENTO 2: DESAPARECER BOTÓN COMPRAR
    // APUNTES:
    // 1. document.querySelectorAll(".btn-comprar"): Selecciona TODOS los botones con esa clase y crea una lista.
    // 2. .forEach((boton) => { ... }): Un ciclo/bucle que recorre cada botón individual de la lista.
    // 3. evento.target: Hace referencia EXACTA únicamente al botón que el usuario acaba de presionar.
    // 4. style.display = "none": Oculta visualmente el elemento (como si lo borrara de la pantalla).
    // ===================================================
    const botonesComprar = document.querySelectorAll(".btn-comprar");

    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            evento.target.style.display = "none";
        });
    });

    // ===================================================
    // REQUERIMIENTO 3: ALERTA "Iniciar Sesión"
    // APUNTES:
    // 1. click: Evento al hacer click.
    // 2. alert("..."): Función nativa para sacar la ventana flotante de aviso con mensaje.
    // ===================================================
    const btnLogin = document.getElementById("btn-login");

    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            alert("Bienvenido a la tienda de flores");
        });
    }

});