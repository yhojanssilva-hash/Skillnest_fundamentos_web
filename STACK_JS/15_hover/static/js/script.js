const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {

    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "lightblue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red";
});

//TAREA
/*
Crear dos botones con evento onmouseover y onmouseout
-Cambia el texto de un boton
-Cambiar el color de fondo y color de texto del segundo boton
*/
const boton1 = document.getElementById("miBoton1");
const boton2 = document.getElementById("miBoton2");
boton1.addEventListener("mouseover", function () {
    boton1.textContent = "Texto cambiado";
});

boton1.addEventListener("mouseout", function () {
    boton1.textContent = "Pasa el cursor sobre mí";
});

boton2.addEventListener("mouseover", function () {
    boton2.style.backgroundColor = "purple";
    boton2.style.color = "yellow";
});

boton2.addEventListener("mouseout", function () {
    boton2.style.backgroundColor = "";
    boton2.style.color = "";
});
