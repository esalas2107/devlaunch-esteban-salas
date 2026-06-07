/*

Crea un programa en JS que calcule la factura total de una persona en un hotel,
donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%.

El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular la factura final.

Si el usuario ingresa que se quedó 5 noches, la salida será: $475.00

*/

const precioHabitacion = 100;

const descuentoHabitacion = 5;

const prompt = require("prompt-sync")();

let cantidadNoches = parseInt(prompt("Digite la cantidad de noches que se hospedó en el hotel: "));

const precioFinal = cantidadNoches * (precioHabitacion - (precioHabitacion * (descuentoHabitacion / 100)));

console.log("-----DETALLES DE SU FACTURA-----");
console.log(`Precio final a cancelar: $${precioFinal}`);