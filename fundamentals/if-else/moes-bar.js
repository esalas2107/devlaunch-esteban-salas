/*

Descripción del código:
Entrada de fecha de nacimineto: se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD
Cálculo de la Edad: Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el año de nacimiento del año actual. 
También se verifica si ya ha pasado el cumpleaños del año actual, para ajustar la edad si es necesario.

Verificación de edad:

Se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 años o más).
Este programa permite que el proceso de verificación de edad sea automático y preciso.

*/

const prompt = require("prompt-sync")();

let userInput = prompt("Digite la fecha de su nacimiento en formato YYYY/MM/DD: ");

let birthDate = new Date(userInput);

let actualDate = new Date();

let age = actualDate.getFullYear() - birthDate.getFullYear();

const actualBirthDay = new Date(actualDate.getFullYear(), birthDate.getMonth() + 1, birthDate.getDay());

if (actualBirthDay < actualDate) {
    console.log(`Su edad es de ${age} años`);
} else {
    age -= 1;
    console.log(`Su edad es de ${age} años`);
}

if (age >= 18) {
    console.log("Ya estás en edad para poder beber alcohol");
} else {
    console.log("Debes de cumplir los 18 años para poder beber alcohol")
}