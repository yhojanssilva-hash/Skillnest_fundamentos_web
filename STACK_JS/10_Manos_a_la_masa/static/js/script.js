function pizzaOven() {
let pizza = {
    corteza: "corteza tradicional",
    salsa: "salsa tradicional",
    quesos: ["mozzarella"],
    ingredientes: ["pepperoni", "salchicha"]
};

function pizzaFactory(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza
    pizza.salsa = salsa
    pizza.quesos = quesos
    pizza.ingredientes = ingredientes
    return pizza;
}
let pizzaLanzada = pizzaFactory(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);
let pizzaVeggie = pizzaFactory(
    "delgada", 
    "pesto", 
    ["cabra"], 
    ["espinacas", "tomates"]
);
let pizzaBBQ = pizzaFactory(
    "con borde de queso", 
    "barbacoa", 
    ["mozzarella", "cheddar"], 
    ["pollo", "tocino"]
);
alert(
    `Ingredientes de la primera pizza:
    \ncorteza: ${pizza.corteza}
    \nquesos: ${pizza.quesos}
    \nsalsa: ${pizza.salsa}
    \ningredientes: ${pizza.ingredientes.join(", ")}`
);
alert(`Ingredientes de la segunda pizza:
    \ncorteza: ${pizzaLanzada.corteza}
    \nquesos: ${pizzaLanzada.quesos}
    \nsalsa: ${pizzaLanzada.salsa}
    \ningredientes: ${pizzaLanzada.ingredientes.join(", ")}`);
alert(`Ingredientes de la tercera pizza:
    \ncorteza: ${pizzaVeggie.corteza}
    \nquesos: ${pizzaVeggie.quesos}
    \nsalsa: ${pizzaVeggie.salsa}
    \ningredientes: ${pizzaVeggie.ingredientes.join(", ")}`);
alert(`Ingredientes de la Cuarta pizza:
    \ncorteza: ${pizzaBBQ.corteza}
    \nquesos: ${pizzaBBQ.quesos}
    \nsalsa: ${pizzaBBQ.salsa}
    \ningredientes: ${pizzaBBQ.ingredientes.join(", ")}`);
}