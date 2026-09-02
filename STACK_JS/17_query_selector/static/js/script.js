console.log("Conexión exitosa con JS")

let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>let h1 = document.querySelector("h1");
console.log(`El contenido del titulo es :
    \n${title.textContent}`)

let parrafo = document.querySelector("p");
console.log(parrafo); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//Tarea:
/*Crear un botón y aplicar condición al igual que ejemplo...
- Debe cambiar su texto al momento de hacerle click
- Debe activarse un hover JS cambiando el color de fondo */
const cambiarBoton = document.querySelector("#boton");

cambiarBoton.addEventListener("click", function(){
    if (this.innerText === "Apretalo y cambiara") {
        this.innerText = "Haz visto que a cambiado?";
        this.style.backgroundColor = "#8f0000";
        this.style.color = "#ffe4a4";
        this.style.border = "2px solid #ffe4a4"
    } else {
        this.innerText = "Apretalo y cambiara";
        this.style.backgroundColor = "#069429"; // Color estado inicial
        this.style.color = "#ffe4a4";
    }
})
