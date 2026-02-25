/* 

El proveedor principal de servicios de telefonía móvil en la ciudad está intrudiciendo una oferta
promocianal basada tanto en el monto de recarga realizado por sus clientes como en la duración de su suscripción
con la compañia. Para ser elegible para la promoción, los clientes deben recargar un mínimo de $20 y un
máximo de $80 y haber estado suscritos durante al menos un año.

En la promoción SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es inferior a 
$38 y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promoción MegaRecharge está dirigida a los clientes que han estado suscritos por más de tres 
años, ofreciéndoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarollar un programa que tome como entrada el nombre del cliente, el monto de la recarga y la duración
de su suscripción, y determine si la promoción les aplica y calcule el monto total de recarga incluyendo la promoción.

*/

const prompt = require("prompt-sync")();

const nombreCliente = prompt("Digite el nombre del cliente: ");
const montoRecarga = parseFloat(prompt("Digite el monto de la recarga que desea hacer: "));
const annoSuscripcion = parseInt(prompt("Digite el tiempo de estar suscrito con la compañía en años: "));
let message = "";

const aplicaPromocion = (montoRecarga >= 20 && montoRecarga <= 80) && annoSuscripcion >= 1;

const superSaver = montoRecarga < 38 && annoSuscripcion <= 3;

const megaCharge = annoSuscripcion > 3;

function asignaPromocion (aplicaPromocion, superSaver, megaCharge, montoRecarga) {
    if(aplicaPromocion) {
        if (superSaver) {
            montoRecarga = montoRecarga * 2;
            message += `Felicitaciones! ${nombreCliente}. Usted puede hacer uso de la promoción Super Saver. Su nuevo monto de recarga es de ${montoRecarga}.`
            return message;
        } else if (megaCharge) {
            montoRecarga = montoRecarga * 3;
            message += `Felitiaciones! ${nombreCliente}. Usted puede hacer uso de la promoción Mega Charge. Gracias por su lealtad! Su nuevo monto de recarga es de ${montoRecarga}.`;
            return message;
        } else {
            message += `Gracias por confiar en nosotros ${nombreCliente}. Pero de momento no hay ninguna promoción disponible para tu caso. Su monto de recarga es de ${montoRecarga}.`;
            return message;
        }
    } else {
        message += `Lo siento ${nombreCliente}. Su situación no es aplicable para ninguna promoción.`
        return message
    }
}

console.log(asignaPromocion(aplicaPromocion, superSaver, megaCharge, montoRecarga));
