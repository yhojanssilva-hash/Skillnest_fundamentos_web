console.log("Conexion de js exitosa...");

const nombre = "Yhojans";
const apellido = "Silva";
//Unimos ambas constantes con un texto extra 
console.log("Hola, mi nombre es:" + nombre + " " + apellido);

/*
2.- Ver el tipo de dato
*/
console.log("La variable nombre es un tipo de datos " + typeof nombre);

//Template literals (forma moderna para concatenar) ´´
 console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

 //Mostrar el largo de un string (texto) - Contar los caracteres.
 // .length --> Para contar caracteres y espacios.
 let palabra= "Paralelepipedo";
 console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

 //Crear una frase y contar sus caracteres.
let frase="Computadora";
console.log(`La frase ${frase} tiene ${frase.length} caracteres`);

//Metodos comunes en JS para formatear texto
//Transformar texto en Mayusculas
let texto1 = "JAvasCriPT Es LO mejor";
console.log(texto1.toUpperCase());

//Transformar texto a minusculas .toLowerCase
console.log(texto1-toLowerCase())
//Buscar un texto dentro de un string
let texto2 ="Leche, azucar, peras, huevos, harina";
console.log(texto1.includes("huevos")); //true
//Convertir una variable a texto
let telefono = 89182920;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono: ${telefono_texto} es de tipo: ${typeof telefono_texto}`);