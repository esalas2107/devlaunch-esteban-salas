/*

En un supermercado se está realizando una oferta promocional en colaboración con la tarjeta Raw Input,
disponible para todos los clientes. 

La promoción consiste en proporcionar descuentos en las compras en función de un número específico, 'n', de productos 
procesados en la caja. Inicialmente, se aplica un descuento del 20% a los primeros 'n' productos.

Posteriormente, cada lote sucesivo de'n' productos recibe un descuento que se reduce a la mitad con respecto al lote anterior. 

Por ejemplo, si 'n = 3' y el cliente compra 11 productos, los primeros 3 productos reciben un descuento del 20%, los siguientes
tres productos reciben un descuento del 10%, el lote siguiente recibe un descuento del 5%, y los dos productos finales no califican para 
descuento.

Para que los clientes no ordenen de forma estratégica sus productos para sacar ventaja de un mejor descuento, el programa debe ordenar
los productos de menor a mayor precio primero.

Después de aplicar los descuento, el programa debe calcular y mostrar el costo total, el monto del descuento y el precio final
a pagar.

calculateDiscount([3000,1000,2000], 2)
{total: 5400, subtotal: 6000, discount: 600}

*/

const calculateDiscount = (products: number[], n: number, discount: number = 0.20) => {
    const tidyArray = products.sort();

    if (n <= tidyArray.length) {
        let discountTotal = 0;
        for (let i = 0; i + n <= tidyArray.length; i += n) {
            const block = tidyArray.slice(i, i + n);

            for (let j = 0; j < block.length; j++) {
                discountTotal += block[j] * discount;
                block[j] = block[j] - (block[j] * discount)
                tidyArray[i + j] = block[j];
            }

            discount /= 2;
            discount = Number(discount.toFixed(2));
        }
        let total: number = 0;
        for(let i=0; i < tidyArray.length; i++) {
            total += tidyArray[i];
        }
        return {
            total: total,
            subtotal: total + discountTotal,
            discount: discountTotal
        }
    } else {
        let total: number = 0;
        for (let i = 0; i < tidyArray.length; i++) {
            total += tidyArray[i];
        }
        return {
            total: total,
            subtotal: total,
            discount: 0
        }
    }
}

console.log(calculateDiscount([5000, 1000, 3000, 2000, 4000, 6000, 7000, 8000], 4));