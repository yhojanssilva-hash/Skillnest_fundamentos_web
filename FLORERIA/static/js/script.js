document.addEventListener("DOMContentLoaded", () => {

    // ===================================================
    // REQUERIMIENTO 1: Click en categorías cambia de color
    // NOTA DE LA MAQUETA: "Al hacer click en las categorías, el botón debe cambiar de color"
    // ===================================================
    const botonesCategoria = document.querySelectorAll(".btn-categoria");

    botonesCategoria.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            // Asignamos el color de fondo púrpura al botón clickeado
            evento.target.style.backgroundColor = "#a04070";
            evento.target.style.color = "#ffffff";
        });
    });


    // ===================================================
    // REQUERIMIENTO 2: Incrementar Likes al hacer click
    // APUNTE: Capturamos el <span> interno del botón clickeado,
    // leemos su valor numérico, le sumamos 1 e imprimimos el nuevo total.
    // ===================================================
    const botonesLike = document.querySelectorAll(".btn-like");

    botonesLike.forEach((boton) => {
        boton.addEventListener("click", () => {
            // Buscamos el elemento span con la clase .cant-likes dentro del botón
            const spanCantidad = boton.querySelector(".cant-likes");
            if (spanCantidad) {
                let contador = parseInt(spanCantidad.textContent);
                contador++;
                spanCantidad.textContent = contador;
            }
        });
    });


    // ===================================================
    // REQUERIMIENTO 3: Alerta en "Cerrar Sesión"
    // NOTA DE LA MAQUETA: "Al hacer click en Cerrar Sesión, debe mostrarse una alerta con 'Sesión cerrada correctamente'"
    // ===================================================
    const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", () => {
            alert("Sesión cerrada correctamente");
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