/*

Escribe un programa simple en JS que evalúe el valor de una variable llamada 'n'.
Verifique si el número es positivo, negativo o cero, y muestre un mensaje correspondiente basado en la siguiente evaluación

Si el número es mayor que 0, imprime "Positivo"
Si el número es menor que 0, imprime "Negativo"
Si el número es exactamente 0, imprime "Cero"

Si la variable no es un número, imprime un mensaje de error: "Por favor, introduce un número".

*/

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite el valor de n: "));
let message = '';

if(n > 0) {
    message = 'Positivo';
    console.log(message);
} else if(n < 0) {
    message = 'Negativo';
    console.log(message);
} else if(n === 0) {
    message = 'Cero'
    console.log(message);
} else {
    message = 'Por favor, introduce un número';
    console.log(message);
}