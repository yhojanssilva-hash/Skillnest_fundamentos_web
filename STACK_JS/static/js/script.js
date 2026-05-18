function cambiarTexto(){
let titulo ="Hola, Bienvenido";
    if (document.getElementById("titulo").innerText == titulo) 
    document.getElementById("titulo").innerText = "Has cambiado el texto";
      else
        document.getElementById("titulo").innerText = titulo;
    }
