/*

Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información
básica. 

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un
tamaño específico (por ejemplo, 'pequeño', 'mediano', 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios. 

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos y propiedades particulares.

*/

class Animal {
    protected name: string;
    protected specie: string;
    protected age: number;
    protected sound: string;

    constructor(name: string, specie: string, age: number, sound: string) {
        this.name = name;
        this.specie = specie;
        this.age = age;
        this.sound = sound;
    }

    makeSound(): string {
        const message: string = `${this.name} is ${this.sound}`;
        return message;
    }

    showInfo(): string {
        const message = `
            *** ANIMAL INFORMATION ***
            NAME: ${this.name}
            SPECIE: ${this.specie}
            AGE: ${this.age}
            `;
        return message;
    }
}

class Lion extends Animal {
    private mane: string;

    constructor(name: string, specie: string, age: number, mane: string) {
        super(name, specie, age, "roaring");
        this.mane = mane;
    }

    makeSound(): string {
        const message = `${this.name} is ${this.sound}`;
        return message;
    }

    showInfo(): string {
        const message = `
            ${super.showInfo()}MANE: ${this.mane}
            SOUND: ${this.makeSound()}
            `
        return message;
    }
}

type ElephantSize = 'small' | 'medium' | 'big'
class Elephant extends Animal {
    private size: ElephantSize;

    constructor(name: string, specie: string, age: number, size: ElephantSize) {
        super(name, specie, age, "sounding its trunk");
        this.size = size;
    }

    makeSound(): string {
        const message = `${this.name} is ${this.sound}`;
        return message;
    }

    showInfo(): string {
        const message = `
            ${super.showInfo()}SIZE: ${this.size}
            SOUND: ${this.makeSound()}
            `
        return message;
    }
}

const lion = new Lion("Alex", "Felino", 20, "Macha");
console.log(lion.showInfo());

const elephant = new Elephant("Dumbo", "Mamífero", 5, "small");
console.log(elephant.showInfo());