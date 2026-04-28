/*

Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un idetificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y métodos deben estar 
definidos dentro de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.
Métodos de la cuenta bancaria (dentro de la función usando this):

deposit(amount): incrementa el saldo de la cuenta.
withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta si hay suficientes fondos disponibles,

*/

interface Account {
    id: number;
    holderName: string;
    balance: number;
    deposit(amount: number): number;
    withdraw(amount: number): number | string;
    transfer(toAccount: Account, amount: number): string;
}

function createAccount(this: Account, id: number, holderName: string, balance: number) {
    this.id = id;
    this.holderName = holderName;
    this.balance = balance;
    this.deposit = function (amount: number) {
        this.balance = this.balance + amount;
        return this.balance;
    },
    this.withdraw =  function (amount: number) {
        let message: string = ''
        if (this.balance > 0 && (this.balance > amount)) {
            this.balance = this.balance - amount;
            return this.balance;
        } else {
            message += "No se puede disminuir el saldo de la cuenta. Puede que no hayan suficientes fondos o que el monto a retirar sea mayor al balance de la cuenta."
            return message
        }
    },
    this.transfer = function (toAccount: Account, amount: number) {
        let message: string = ''
        if (this.balance > 0 && (this.balance > amount)) {
            toAccount.balance = toAccount.balance + amount
            message += `La transferencia por $${amount} a la cuenta ${toAccount.id}. Ha sido exitosa.`
            return message
        } else {
            message += "No se puede transferir el saldo de la cuenta. Puede que no hayan suficientes fondos o que el monto a transferir sea mayor al balance de la cuenta."
            return message
        }
    }
}

// Crear dos cuentas
const account1 = new (createAccount as any)(1, "Esteban", 500);
const account2 = new (createAccount as any)(2, "María", 300);

// Probar depósito
console.log("Depósito en cuenta 1:", account1.deposit(200));
// Esperado: 700

// Probar retiro válido
console.log("Retiro en cuenta 1:", account1.withdraw(100));
// Esperado: 600

// Probar retiro inválido (más que el saldo)
console.log("Retiro inválido en cuenta 2:", account2.withdraw(400));
// Esperado: mensaje de error

// Probar transferencia válida
console.log(account1.transfer(account2, 200));
// Esperado: transferencia exitosa, saldo de account1 = 400, saldo de account2 = 500

// Probar transferencia inválida (más que el saldo disponible)
console.log(account1.transfer(account2, 1000));
// Esperado: mensaje de error
