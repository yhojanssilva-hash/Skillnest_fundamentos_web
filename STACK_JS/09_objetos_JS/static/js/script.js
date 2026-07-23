console.log ("Conexion js...")


let hamburguesaEspecial = {

    pan:"Pan brioche",

    carne:"Pollo crujiente",

    queso:"Suizo",

    extras:[

        "Lechuga",

        "Pepinos",

        "Miel"

    ],

    mostrarIngredientes:function(){

        console.log("Pan:",this.pan);

        console.log("Carne:",this.carne);

        console.log("Queso:",this.queso);

        console.log(

            "Extras:",

            this.extras.join(", ")

        );

    }

};


//Acceder al pan

console.log(hamburguesaEspecial.pan); 
hamburguesaEspecial.mostrarIngredientes();