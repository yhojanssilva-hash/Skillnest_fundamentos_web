document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColorBody();
});

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColorCaja1();
});

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColorCaja2();
});

const colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];

function obtenerColorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

function cambiarColorBody() {
    document.body.style.backgroundColor = obtenerColorAleatorio();
}

function cambiarColorCaja1() {
    const caja1 = document.querySelector("#caja1");
    if (caja1) caja1.style.backgroundColor = obtenerColorAleatorio();
}

function cambiarColorCaja2() {
    const caja2 = document.querySelector("#caja2");
    if (caja2) caja2.style.backgroundColor = obtenerColorAleatorio();
}