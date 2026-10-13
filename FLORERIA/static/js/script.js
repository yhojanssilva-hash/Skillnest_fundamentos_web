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








/* ==============================================================================
   ANEXO DE RESPALDO - VARIACIONES DE SKILLNEST
   ==============================================================================
   Todo este bloque son comentarios informativos. No genera errores de código.

   1. CONTADOR DE LIKES / INCREMENTAR NÚMEROS (Tarea 13 - CORE Likes)
   ------------------------------------------------------------------------------
   Si te piden que un número suba al hacer click en un botón:

   let contador = document.querySelector("#numero-likes");
   let botonLike = document.querySelector("#btn-like");

   botonLike.addEventListener("click", () => {
       let cantidadActual = parseInt(contador.innerText); // Convierte texto a número
       cantidadActual++;                                   // Suma 1
       contador.innerText = cantidadActual;              // Muestra el nuevo valor
   });


   2. CAMBIAR UNA IMAGEN AL PASAR EL MOUSE (Tarea 12 - Galería)
   ------------------------------------------------------------------------------
   Si te piden cambiar la imagen (atributo src) cuando el mouse entra/sale:

   let imagen = document.querySelector("#mi-imagen");

   imagen.addEventListener("mouseover", () => {
       imagen.src = "imagen2.jpg"; // Cambia a la segunda foto
   });

   imagen.addEventListener("mouseout", () => {
       imagen.src = "imagen1.jpg"; // Vuelve a la foto original
   });


   3. USO DEL PARÁMETRO 'this' DIRECTAMENTE DESDE HTML (Tarea 10)
   ------------------------------------------------------------------------------
   Si en la prueba la etiqueta HTML tiene el atributo directo:
   <button onclick="cambiarTexto(this)">Iniciar</button>

   En tu archivo JavaScript usas esta función:

   function cambiarTexto(elemento) {
       // 'elemento' recibe 'this', que es el botón exacto que fue presionado
       if (elemento.innerText === "Iniciar") {
           elemento.innerText = "Cerrar Sesión";
       } else {
           elemento.innerText = "Iniciar";
       }
   }
   ============================================================================== */