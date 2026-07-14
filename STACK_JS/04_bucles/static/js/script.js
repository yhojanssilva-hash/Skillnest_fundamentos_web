console.log("Conexion con js...")

/* Ejemplo bucle for */
function cuentahasta5(){
    for (let i = 10; i > 3; i--) 
    alert(i);
}


function cuentaRegresiva(){
for (let i = 0; i < 3; i++) 
alert(i);
}

/*Ejemplo bucle (2)*/ 
function usuarios(){
let usuarios = ["Ana", "Luis", "María"];
for (let i = 0; i < usuarios.length; i++) {
alert("Bienvenido, " + usuarios[i]);
}
}

/* Ejemplo bucle while */
let reproduciendo = true;
function canción(){
while (reproduciendo) {
alert("La canción sigue sonando...");
   // Simulación de una acción que detendría la reproducción
reproduciendo = false;
}
}

let datosPendientes = 5;
function cargarDatos(){
while (datosPendientes > 0) {
alert("Cargando datos...");
datosPendientes--;
}
}

function verificarContrasena() {
    let contrasenaCorrecta = false;

    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contrasenaCorrecta = true;
            alert("Acceso concedido.");
            break
            alert("No se ejecuta") // Rompe El bucle
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}




