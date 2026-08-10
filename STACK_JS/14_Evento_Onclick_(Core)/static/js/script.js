function cambiarLogin(btn) {
    if (btn.innerText === "Iniciar sesión") {
        btn.innerText = "Cerrar sesión";
    } else {
        btn.innerText = "Iniciar sesión";
    }
}

function darLike(btn) {
    let likes = parseInt(btn.innerText);
    btn.innerText = (likes + 1) + " Me gusta";
}

function verPerfil() {
    alert("Cargando perfil...");
}