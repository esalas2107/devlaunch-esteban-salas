/*

Escribe un programa sencillo en JS que calcule y muestre el Índice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos.

Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre y el valor de su IMC.

Calcula el IMC utilizando la fórmula:

IMC = weight / height**2

Nombre: John
Altura: 1.75
Peso: 70

La salida será: Hi John, your BMI is ~22.86
*/

const prompt = require("prompt-sync")();

const nombre = prompt("Digite su nombre: ");
const altura = parseFloat(prompt("Digite su altura (en metros): "));
const peso = parseFloat(prompt("Digite su peso: "));

let imc = peso / (Math.pow(altura, 2));

console.log(`Hi ${nombre}, your BMI is ~${imc.toFixed(2)}`)