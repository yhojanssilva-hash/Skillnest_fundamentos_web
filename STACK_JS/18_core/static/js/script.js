
function aumentarLike(idContador) {
    let contadorElemento = document.querySelector(idContador);
    let cantidadLikes = parseInt(contadorElemento.innerText);
    cantidadLikes++;
    contadorElemento.innerText = cantidadLikes;
}