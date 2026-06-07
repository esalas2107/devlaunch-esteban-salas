/* 

Voy al supermercado GreenCenter para hacer mis comprar habituales y 
planeo comprar manzanas y naranjas. 
Cuando estoy allí, veo que no hay plátanos ni uvas, así que cambio un poco mi lista.
Veo que 3 cajeros están trabajando, así que me preparo para pagar. 
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio.

*/

const supermarketName = "GreenCenter"

const listItem1 = "manzanas"
const listItem2 = "naranjas"
const listItem3 = "plátanos"
const listItem4 = "uvas"

const areBananasAvailable = false
const areGrapesAvailable = false

const supermarketCashier = 3

const supermarketCurrency = "$"

const listCost = 100

const payAmount = 150

const payType = " cash"

const changeAmount = payAmount - listCost

console.log(`
    Supermercado: ${supermarketName}\n
    Lista: ${listItem1}, ${listItem2}, ${listItem3}, ${listItem4}\n
    Productos no presentes en la lista: ${listItem3}, ${listItem4}\n
    Cajeros trabajando: ${supermarketCashier}\n
    Precio lista: ${supermarketCurrency}${listCost}\n
    Pago: ${supermarketCurrency}${payAmount}${payType}\n
    Cambio: ${supermarketCurrency}${changeAmount}\n
    `)