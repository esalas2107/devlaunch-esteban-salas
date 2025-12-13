/* Escribe un programa en JS que solicite al usuario ingresar el número de días y calcule el número equivalente 
de meses y días restantes, considerando que un mes consta de 30 días.

Este programa utiliza el módulo prompt-sync para recibir interactivamente la entrada del usuario. Después de calcular la cantidad de meses y días
restantes según la entrada, el programa muestra un mensaje al usuario indicando el equivalente en meses y días restantes.

Como pista, puedes usar el Math.floor() para redondear el resultado a un número entero.

Si el usuario ingresa 100, la salida será: 100 days are 3 months and 10 days.
*/

const prompt = require("prompt-sync")();

const cantidadDias = parseInt(prompt("Digite la cantidad de días: "));

let meses = Math.floor(cantidadDias / 30);

let dias = Math.floor(cantidadDias % 30);

console.log(`${cantidadDias}: days are ${meses} months and ${dias} days`)
