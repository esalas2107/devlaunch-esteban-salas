/*

Escribe un programa simple en JS que examine las preferencias culinarias de tres personas: María, Pepe y Malvern.
El programa analiza tres condiciones:

Comparte María la misma comida favorita que tanto Pepe como Malver
La comida favorita de María coincide ya sea con la de Pepe ó con la de Malvern
La preferencia de María es diferente tanto a la de Pepe como a la de Malvern

Recuerda pedir valores al usuario para poder elegir diferentes combinaciones, ejemplo:
SI la comida favorita de María es la pizza, la de Pepe es el pollo y la de Malvern es el pescado.

Los resultados de estas comparaciones se muestran luego, ofreciendo información sobre las similitudes y diferencias en las prefrerencias culinarias 
de los tres individuos.

La salida del programa será: 
Does Maria share the same favorite food as both Pepe and Malvern : false
Does Maria's favorite foot match either Pepe's or Malvern's : false
Does Maria's preference differ from both Pep's and Malvern's : true
*/

const prompt = require("prompt-sync")();

const mariaFavoriteFood = prompt("Digite la comida favorita de María: ");
const pepeFavoriteFood = prompt("Digite la comida favorita de Pepe: ");
const malvernFavoriteFood = prompt("Digite la comida favorita de Malvern: ");

let firstQuestion = (mariaFavoriteFood === pepeFavoriteFood && mariaFavoriteFood === malvernFavoriteFood)
let secondQuestion = (mariaFavoriteFood === pepeFavoriteFood || mariaFavoriteFood === malvernFavoriteFood)
let thirdQuestion = (mariaFavoriteFood !== pepeFavoriteFood && mariaFavoriteFood !== malvernFavoriteFood)

console.log(`Does Maria share the same favorite food as both Pepe and Malvern: ${firstQuestion}`)
console.log(`Does Maria's favorite foot match either Pepe's or Malvern's: ${secondQuestion}`)
console.log(`Does Maria's preference differ from both Pep's and Malvern's ${thirdQuestion}`)