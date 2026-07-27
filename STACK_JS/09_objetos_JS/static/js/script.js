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