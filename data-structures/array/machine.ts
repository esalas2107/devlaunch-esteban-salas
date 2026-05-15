/*

Crea un programa que simule la operación de una máquina expendedora, permitiendo a un usuario seleccionar de una lista de 
productos e insertar monedas hasta que alcance o supere la cantidad requerida para su producto elegido.

La máquina expendedora solo aceptará denominaciones de monedas específicas, y si el usuario inserta más del monto requerido, deberá devolver 
el exceso como cambio.

La máquina expendedora tiene tres productos: A(🍔), B(🍕), y C(🌮).

Cada producto tiene un precio específico: A cuesta $14, B cuesta $10, C cuesta $8.

Muestra la lista de productos con los precios correspondientes e íconos al usuario.

La máquina acepta monedas en denominaciones de $1, $2, $5 y $10. Muestra las monedas aceptadas al usuario y pídeles que 
inserten una de estas cantidades.

Pide al usuario que seleccione un producto escribiendo su letra correspondiente (A, B o C). Si el usuario ingresa una opción
inválida, el programa debe pedirle nuevamente hasta que ingrese una selección válida. 

Después de seleccionar un producto, solicita al usuario que inserte monedas hasta que el monto total insertado coincida o exceda el
precio del producto seleccionado.

Lleva el registro de la cantidad insertada y muestra el balance al usuario después de cada inserción de moneda. Una vez que se 
alcanza el monto requerido:

Muestra el producto seleccionado y un mensaje confirmando la compra. Calcula y muestra cualquier cambio si la cantidad insertada 
excede el precio del producto.

Limpia la consola después de cada inserción de moneda y solicitud de selección de producto para una experiencia de usuario más
limpia.

Ejemplo: 

El usuario selecciona el producto A (🍔) con un precio de $14.
El usuario comienza a insertar monedas: Inserta $5 -> Balance: $5 Inserta $10 -> Balance $15

La máquina confirma la compra de 🍔 y devuelve $1 como cambio. Requisitos adicionales: 

Implementa validación de entrada para monedas válidas o entradas no numéricas. 

*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Product {
    description: string;
    icon: string;
    _price: number;
    _option: string;

    constructor(description: string, icon: string, price: number, option: string) {
        this.description = description;
        this.icon = icon;
        this._price = price;
        this._option = option;
    }

    get price(): number {
        return this._price;
    }

    public toString(): string {
        return (`
        *** Product Info *** 
        Option: ${this._option}
        Description: ${this.description} ${this.icon}
        Price: $ ${this.price}
        `)
    }
}

const products: Product[] = [
    new Product("Hamburguer", "🍔", 14, "A"),
    new Product("Pizza", "🍕", 10, "B"),
    new Product("Taco", "🌮", 8, "C")
];

const validCoins: number[] = [1, 2, 5, 10];

function handlePurchase(selectedProduct: Product): void {
    let userBalance = 0;
    let userExchange = 0;
    let userCoinInsertionControl = true;

    while (userCoinInsertionControl) {
        console.log("*** PRODUCTO SELECCIONADO ***");
        console.log(selectedProduct.toString());
        console.log("Por favor, introduzca la cantidad del precio del producto: ");
        console.log("IMPORTANTE: Solo se permiten monedas de $1, $2, $5 o $10.");
        console.log("Balance -> $", userBalance);

        const userCoinInsertion = parseInt(prompt("Digite una moneda a cancelar: "));
        console.clear();

        if (validCoins.includes(userCoinInsertion)) {
            userBalance += userCoinInsertion;
            if (userBalance === selectedProduct.price) {
                console.log("*** PRODUCTO COMPRADO ***");
                console.log(selectedProduct.toString());
                console.log("Gracias por preferirnos. Le esperamos pronto.");
                userCoinInsertionControl = false;
            } else if (userBalance > selectedProduct.price) {
                userExchange = userBalance - selectedProduct.price;
                console.log("*** PRODUCTO COMPRADO ***");
                console.log(selectedProduct.toString());
                console.log("Cambio restante para el usuario -> $", userExchange);
                console.log("Gracias por preferirnos. Le esperamos pronto.");
                userCoinInsertionControl = false;
            }
        } else {
            console.log("Error: moneda inválida. Por favor, inténtelo de nuevo.");
        }
    }
}

function vendingMachine() {
    let menuControl = true;

    while (menuControl) {
        console.log("*** LISTA DE PRODUCTOS DISPONIBLES ***");
        products.forEach(p => console.log(p.toString()));

        const userOption = prompt("Digite el producto que desea comprar (A / B / C / D (para salir)): ");

        if (userOption === "D") {
            console.clear();
            console.log("Gracias por utilizar nuestros servicios. Le esperamos pronto.");
            menuControl = false;
        } else {
            const selectedProduct = products.find(p => p._option === userOption);
            if (selectedProduct) {
                console.clear();
                handlePurchase(selectedProduct); 
                menuControl = false;
            } else {
                console.clear();
                console.log("Error: opción inválida. Por favor, inténtelo de nuevo.");
            }
        }
    }
}

vendingMachine();