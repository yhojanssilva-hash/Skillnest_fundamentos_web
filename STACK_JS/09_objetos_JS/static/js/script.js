console.log("Conexion con JS...");

let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        alert("Pan: " + this.pan);
        alert("Carne: " + this.carne);
        alert("Queso: " + this.queso);
        alert("Extras: " + this.extras.join(", "));
    }
};

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    encender: function () {
        alert("Marca: " + this.marca);
        alert("Modelo: " + this.modelo);
        alert("Año: " + this.año);
        alert("Encendiendo el auto...");
    }
};

function mostrarInformacionCasa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        MostrarInformacion: function () {
            alert(`Dirección: ${this.direccion}`);
            alert(`Habitaciones: ${this.habitaciones}`);
            alert(`Baños: ${this.baños}`);
        }
    };


    casa.MostrarInformacion();
}