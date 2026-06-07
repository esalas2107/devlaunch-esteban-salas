/* 

El programa solicita al usuario su edad con prompt-sync, la convierte a número y utiliza if-else para clasificar:

0 - 2 años: "You are a baby";
3 - 13 años: "You are a child";
14 - 17 años: "You are a teenager";
18 - 29 años: "You are a young adult";
30 - 60 años: "You are an adult";
Más de 60 años: "You are an elderly";

Si la edad es menor a 5, muestra: "The institution does not support your age, please try again.
Es una forma clara y útil de categorizar por edades.
"

*/

const prompt = require("prompt-sync")();

let age = parseInt(prompt("Digite su edad: "));

/* if(age >= 0 && age <= 2) {
    console.log("You are a baby");
    console.log("The institution does not support your age, please try again.");
} else if(age >= 3 && age < 5) {
    console.log("You are a child");
    console.log("The institution does not support your age, please try again.");
} else if(age >= 5 && age <= 13) {
    console.log("You are a child");
} else if(age >= 14 && age <= 17) {
    console.log("You are a teenager");
} else if(age >= 18 && age <= 29) {
    console.log("You are a young adult");
} else if(age >= 30 && age <= 60) {
    console.log("You are an adult");
} else if(age > 60) {
    console.log("You are an elderly");
} */

const underAgeMessage = "The institution does not support your age, please try again.";

let message = 
age >= 0 && age <= 2 ? "You are a baby. " + underAgeMessage
: age >= 3 && age < 5 ? "You are a child" + underAgeMessage
: age >= 5 && age <= 13 ? "You are a child"
: age >= 14 && age <= 17 ? "You are a teenage"
: age >= 18 && age <= 29 ? "You are a young adult"
: age >= 30 && age <= 60 ? "You are an adult"
: age > 60 ? "You are an eldery"
: "Invalid age";

console.log(message);

