/* Simula la interacción entre una tarjeta de crédito y un cajero automático. El usuario puede insertar su tarjeta, verificar 
su saldo, hacer compras o pagos, y retirar dinero(si está dentro del límite).
*/

class CreditCard {
    private _creditCardNumber?: number;
    private _pinNumber?: number;
    private _holderName?: string;
    private _expirationDate?: Date;
    private _balance?: number;

    constructor(creditCardNumber?: number, pinNumber?: number, holderName?: string, expirationDate?: Date, balance?: number) {
        this._creditCardNumber = creditCardNumber;
        this._pinNumber = pinNumber;
        this._holderName = holderName;
        this._expirationDate = expirationDate;
        this._balance = balance;
    }

    get creditCardNumber(): number | undefined {
        return this._creditCardNumber;
    }

    set creditCardNumber(newCreditCardNumber: number) {
        this._creditCardNumber = newCreditCardNumber;
    }

    get pinNumber(): number | undefined {
        return this._pinNumber;
    }

    set pinNumber(newPinNumber: number) {
        this._pinNumber = newPinNumber
    }

    get holderName(): string | undefined {
        return this._holderName
    }

    set holderName(newHolderName: string) {
        this._holderName = newHolderName;
    }

    get expirationDate(): Date | undefined {
        return this._expirationDate;
    }

    set expirationDate(newExpirationDate: Date) {
        this._expirationDate = newExpirationDate;
    }

    get balance(): number | undefined {
        return this._balance;
    }

    set balance(newBalance: number) {
        this._balance = newBalance;
    }
}

class ATM {
    private _creditCards: CreditCard[];

    constructor(creditCards: CreditCard[]) {
        this._creditCards = creditCards;
    }

    get creditCards(): CreditCard[] {
        return this._creditCards;
    }

    set creditCards(newCreditCards: CreditCard[]) {
        this._creditCards = newCreditCards;
    }
}

import PromptSync from "prompt-sync"

const prompt = PromptSync();

function showOptions() {
    console.log("\n*** SISTEMA DE ADMINISTRACIÓN DE CUENTAS BANCARIAS ***");
    console.log("Opción 1: Ver su balance.");
    console.log("Opción 2: Hacer un pago.");
    console.log("Opción 3: Hacer un retiro.");
    console.log("Opción 4: Salir.\n");
}

function menu(): void {
    const redCreditCard = new CreditCard(4745812616120218, 356, "Esteban Salas Alfaro", new Date(2031, 10, 1), 8000);
    const goldCreditCard = new CreditCard(5543671309820406, 963, "Esteban Salas Alfaro", new Date(2030, 5, 1), 100000);

    const creditCards: CreditCard[] = [redCreditCard, goldCreditCard];

    const atm = new ATM(creditCards);

    const creditCardNumber = parseInt(prompt("Digite su número de tarjeta: "));
    const pinNumber = parseInt(prompt("Digite su el número de pin de su tarjeta: "));

    let authorized = false;
    let creditCardAuthorized = new CreditCard();

    for (let i = 0; i < atm.creditCards.length; i++) {
        if ((creditCardNumber === atm.creditCards[i].creditCardNumber && pinNumber === atm.creditCards[i].pinNumber) && atm.creditCards[i].expirationDate! > new Date()) {
            authorized = true;
            creditCardAuthorized = atm.creditCards[i];
        }
    }

    let option: number;

    if(!authorized) {
        console.log("Error: datos inválidos. ")
    } else {
        console.log(`Bienvenido! ${creditCardAuthorized.holderName}.`)
    }

    let activeMenu = true;

    while (activeMenu) {
        if (authorized) {
            showOptions();
            const option = parseInt(prompt("Escoja una opción: "))
            switch (option) {
                case 1:
                    console.log(`El balance de su cuenta es de: $${creditCardAuthorized.balance}`);
                    break;
                case 2:
                    const typeBill = prompt("Digite el tipo de pago que desea realizar: ")
                    const billCost = parseInt(prompt("Digite el coste del pago: "))
                    if (billCost > creditCardAuthorized.balance!) {
                        console.log("Error: No puede hacer un pago de mayor valor al límite de fondos de su cuenta. ")
                    } else {
                        creditCardAuthorized.balance = creditCardAuthorized.balance! - billCost;
                        console.log(`
*** FACTURA DE SU PAGO ***
DESCRIPCIÓN: ${typeBill}
TOTAL: $${billCost}
BALANCE RESTANTE EN SU CUENTA: $${creditCardAuthorized.balance}
                            `)
                    }
                    break;
                case 3:
                    const withdrawalAmount = parseInt(prompt("Digite la cantidad de dinero que desea retirar: "))
                    if (withdrawalAmount > creditCardAuthorized.balance!) {
                        console.log("Error: No puede hacer retirar una cantidad mayor al límite de fondos de su cuenta. ")
                    } else {
                        creditCardAuthorized.balance = creditCardAuthorized.balance! - withdrawalAmount;
                        console.log(`
CANTIDAD RETIRADA: $${withdrawalAmount}
BALANCE RESTANTE DE SU CUENTA: $${creditCardAuthorized.balance}
                            `)
                    }
                    break;
                case 4:
                    activeMenu = false;
                    break;
                default:
                    console.log("Error: opción inválida. ")
            }
        }
    }
}

menu();
