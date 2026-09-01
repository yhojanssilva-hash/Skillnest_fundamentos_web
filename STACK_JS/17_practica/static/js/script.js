const cajaDemostracion = document.getElementById("demostracion");
const cambioImagen = document.getElementById("pintura");
const textoInformacion= document.getElementById("informacion");



cajaDemostracion.addEventListener("mouseover", function() {
    cambioImagen.src = "static/images/noche-estrellada-sobre-el-ródano.png";
    textoInformacion.textContent = "La noche estrellada, Vincent van Gogh (1889)";
});

cajaDemostracion.addEventListener("mouseout", function() {
    cambioImagen.src = "static/images/campo-de-trigo-con-cipreses.png";
    textoInformacion.textContent = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
});
