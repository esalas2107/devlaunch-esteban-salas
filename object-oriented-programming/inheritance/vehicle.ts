/*

Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte. 

El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura de herencia de clases.

Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

Los vehículos deben poder arrancar y mostrar su información.

Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado. 

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

*/

class Vehicle {
    protected emoji: string;
    protected brand: string;
    protected model: string;
    protected fabricatedYear: number;

    constructor(emoji: string, brand: string, model: string, fabricatedYear: number) {
        this.emoji = emoji;
        this.brand = brand;
        this.model = model;
        this.fabricatedYear = fabricatedYear;
    }

    toString() {
        return `
        --- VEHICLE INFORMATION ${this.emoji} ---
        BRAND: ${this.brand}
        MODEL: ${this.model}
        YEAR OF FABRICATION: ${this.fabricatedYear}
        `
    }

    startEngine() {
        return `Starting engine...`
    }
}

class Motorcycle extends Vehicle {
    private sideCar: boolean;

    constructor(emoji: string, brand: string, model: string, fabricatedYear: number, sideCar: boolean) {
        super(emoji, brand, model, fabricatedYear)
        this.sideCar = sideCar;
    }

    makesAcrobatics(): string {
        const message = "The motorcyle is making a wheelie";
        return message;
    }

    toString(): string {
        return `
        ${super.toString()}
        SIDECAR: ${this.sideCar}
        `
    }
}

class Car extends Vehicle {
    private doorsNumber: number;
    private airConditioning: boolean;

    constructor(emoji: string, brand: string, model: string, fabricatedYear: number, doorsNumber: number, airConditioning: boolean) {
        super(emoji, brand, model, fabricatedYear)
        this.doorsNumber = doorsNumber;
        this.airConditioning = airConditioning;
    }

    toString(): string {
        return `
        ${super.toString()}
        NUMBER OF DOORS: ${this.doorsNumber}
        AIR CONDITIONING: ${this.airConditioning}
        `
    }
}

const motorcyle = new Motorcycle("🏍️", "Honda", "CRF1100D4 AFRICA TWIN DCT 2026", 2026, false);
console.log(motorcyle.toString());
console.log(motorcyle.startEngine());
console.log(motorcyle.makesAcrobatics());

const car = new Car("🚙", "Ford", "Mustang Shelby GT-500", 2022, 4, true);
console.log(car.toString());
console.log(car.startEngine());