/*

Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela.
Como parte de este desafío, primero configuras el entorno para recibir entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con máxmo de dos decimales, para asegurar una lectura clara.

Si el usuario ingresa las calificaciones 80, 70, 90, salida será: 80

*/

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite la primera nota: "));
let nota2 = parseFloat(prompt("Digite la segunda nota: "));
let nota3 = parseFloat(prompt("Digite la tercera nota: "));

const grades_amount = 3;
const max_digits = 2;

let promedio = parseFloat((nota1 + nota2 + nota3) / grades_amount);

console.log("-----DETALLES DE SU PROMEDIO-----");
console.log(`Nota#1: $${nota1}`);
console.log(`Nota#2: $${nota2}`);
console.log(`Nota#3: $${nota3}`);
console.log(`Promedio final: ${promedio.toFixed(max_digits)}`);