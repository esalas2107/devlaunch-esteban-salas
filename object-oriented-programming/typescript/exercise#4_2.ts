/*

Pokemon Battle Simulator

Design a turn-based battle between two Pokemon where each has three unique abilities.

Rules: 
Base Class: Create an abstract class Pokemon with:
name: string
health: number(default 100)
Method attack(opponent: Pokemon): void
Method isAlive(): boolean
Pokemon Defined:
Pikachu
Thunder Shock: deals 20 damage
Quick Attack: deals 10 damage (always available)
Heal Spark: heals 20 health (can only be used once)
Charizard
Flamethrower: deals 30 damage (can only be used every 2 turns)
Scratch: deals 15 damage
Fire Breath: heals 10 health and burns the opponent (adds 10 damage on the next turn)

*/

abstract class Pokemon {
    public name: string;
    public health: number;
    public turnCounter: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.turnCounter = 1;
    }

    isAlive(): boolean {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        return `
        *** INFORMACIÓN DEL POKEMON ***
        NOMBRE: ${this.name}
        VIDA: ${this.health}
        `
    }
}

class Pikachu extends Pokemon {
    public usageHealSpark: boolean;
    constructor() {
        super("Pikachu");
        this.usageHealSpark = false;
    }

    thunderShock(opponent: Pokemon): void {
        opponent.health -= 20;
        this.turnCounter++;
    }

    quickAttack(opponent: Pokemon): void {
        opponent.health -= 10;
        this.turnCounter++;
    }

    healSpark(): boolean {
        if (!this.usageHealSpark) {
            this.health += 30;
            this.turnCounter++;
            this.usageHealSpark = true;
            return true;
        } else {
            console.log("El movimiento Heal Spark ya fue utilizado una vez, escoja otro movimiento.")
            return false;
        }
    }
}

class Charizard extends Pokemon {
    constructor() {
        super("Charizard");
    }

    flamethrower(opponent: Pokemon): boolean {
        if (this.turnCounter % 2 == 0) {
            opponent.health -= 30;
            this.turnCounter++;
            return true;
        } else {
            console.log("El movimiento Flame Thrower solo se puede utilizar cada dos turnos, escoja otro movimiento.")
            return false;
        }
    }

    scratch(opponent: Pokemon): void {
        opponent.health -= 15;
        this.turnCounter++;
    }

    fireBreath(opponent: Pokemon): void {
        this.health += 10;
        opponent.health -= 10;
        this.turnCounter++;
    }
}

import PromptSync from "prompt-sync"

const prompt = PromptSync();

function battle(): void {
    const pokemon1 = new Pikachu();
    const pokemon2 = new Charizard();

    console.log("*** BIENVENIDO A LA BATALLA POKEMON ***")

    while (pokemon1.isAlive() && pokemon2.isAlive()) {
        if (pokemon1.isAlive()) {
            console.log(`*** TURNO DE ${pokemon1.name} ***`);
            console.log("MOVIMIENTOS DISPONIBLES: ");
            console.log("Opción 1: Thunder Shock");
            console.log("Opción 2: Quick Attack");
            console.log("Opción 3: Heal Spark");
            let validMove = false;
            while (!validMove) {
                let option = parseInt(prompt("Digite un movimiento a escoger: "));
                switch (option) {
                    case 1:
                        pokemon1.thunderShock(pokemon2);
                        console.log(pokemon2.toString());
                        validMove = true;
                        break;
                    case 2:
                        pokemon1.quickAttack(pokemon2);
                        console.log(pokemon2.toString());
                        validMove = true;
                        break;
                    case 3:
                        validMove = pokemon1.healSpark();
                        if (validMove) console.log(pokemon1.toString());
                        break;
                    default:
                        console.log("Error: opción inválida.")
                }
            }
        } else if (!pokemon2.isAlive()) break;
        if (pokemon2.isAlive()) {
            console.log(`*** TURNO DE ${pokemon2.name} ***`);
            console.log("MOVIMIENTOS DISPONIBLES: ");
            console.log("Opción 1: Flame Thrower");
            console.log("Opción 2: Scratch");
            console.log("Opción 3: Fire Breath");
            let validMove = false;
            while (!validMove) {
                let option = parseInt(prompt("Digite un movimiento a escoger: "));
                switch (option) {
                    case 1:
                        validMove = pokemon2.flamethrower(pokemon1);
                        if (validMove) console.log(pokemon1.toString());
                        break;
                    case 2:
                        pokemon2.scratch(pokemon1);
                        console.log(pokemon1.toString());
                        validMove = true;
                        break;
                    case 3:
                        pokemon2.fireBreath(pokemon1);
                        console.log(pokemon1.toString());
                        console.log(pokemon2.toString());
                        validMove = true;
                        break;
                    default:
                        console.log("Error: opción inválida.")
                }
            }
        } else if (!pokemon2.isAlive()) break;
    }

    if (pokemon1.isAlive()) {
        console.log(`WINNER: ${pokemon1.name}`)
    } else {
        console.log(`WINNER: ${pokemon2.name}`)
    }

    console.log("*** END ***");
}

battle()