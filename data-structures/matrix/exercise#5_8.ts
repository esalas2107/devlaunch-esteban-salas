/*

Memory game

*/

class Position {
    public row: number;
    public col: number;

    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
}

class MemoryGame {
    private realMatrix: string[][];
    public userMatrix: string[][];
    public tryCounter: number;

    constructor() {
        this.userMatrix = [
            ["?", "?", "?", "?"],
            ["?", "?", "?", "?"],
            ["?", "?", "?", "?"],
            ["?", "?", "?", "?"],
        ],
            this.realMatrix = [
                ["A", "B", "C", "D"],
                ["D", "A", "B", "C"],
                ["E", "F", "G", "H"],
                ["H", "E", "F", "G"],
            ],
            this.tryCounter = 0;
    }

    public toString(anyMatrix: string[][]) {
        return anyMatrix.map(row => row.join(" ")).join("\n");
    }

    public try(position1: Position, position2: Position) {
        let message = "";
        if (this.userMatrix[position1.row][position1.col] !== "?" || this.userMatrix[position2.row][position2.col] !== "?") {
            message = "Error: No se puede ingresar posiciones de pares ya descubiertos";
            return message;
        } else if (this.realMatrix[position1.row][position1.col] === this.realMatrix[position2.row][position2.col]) {
            this.tryCounter++;
            this.userMatrix[position1.row][position1.col] = this.realMatrix[position1.row][position1.col];
            this.userMatrix[position2.row][position2.col] = this.realMatrix[position2.row][position2.col];
            message = this.toString(this.userMatrix);
            message += "\nIntento número: " + this.tryCounter;
            return message;
        } else if (this.realMatrix[position1.row][position1.col] !== this.realMatrix[position2.row][position2.col]) {
            this.tryCounter++;
            this.userMatrix[position1.row][position1.col] = this.realMatrix[position1.row][position1.col];
            this.userMatrix[position2.row][position2.col] = this.realMatrix[position2.row][position2.col];
            console.log(this.toString(this.userMatrix));
            console.log("\nPareja distinta. Inténtelo de nuevo.\n")
            this.userMatrix[position1.row][position1.col] = "?";
            this.userMatrix[position2.row][position2.col] = "?";
            message = this.toString(this.userMatrix);
            message += "\nIntento número: " +  this.tryCounter;
            return message;
        }
    }
}

function main() {
    const memoryGame = new MemoryGame;

    const position1: Position = new Position(0, 0);
    const position2: Position = new Position(1, 1);

    console.log(memoryGame.try(position1, position2));

    const positionA: Position = new Position(0, 0);
    const positionB: Position = new Position(1, 1);

    console.log(memoryGame.try(positionA, positionB));

    const position3: Position = new Position(0, 1);
    const position4: Position = new Position(1, 2);

    console.log(memoryGame.try(position3, position4));

    const position5: Position = new Position(0, 2);
    const position6: Position = new Position(1, 3);

    console.log(memoryGame.try(position5, position6));

    const position7: Position = new Position(0, 3);
    const position8: Position = new Position(1, 0);

    console.log(memoryGame.try(position7, position8));

    const position9: Position = new Position(2, 0);
    const position10: Position = new Position(3, 1);

    console.log(memoryGame.try(position9, position10));

    const position11: Position = new Position(2, 1);
    const position12: Position = new Position(3, 2);

    console.log(memoryGame.try(position11, position12));

    const position13: Position = new Position(2, 2);
    const position14: Position = new Position(3, 3);

    console.log(memoryGame.try(position13, position14));

    const position15: Position = new Position(2, 3);
    const position16: Position = new Position(3, 0);

    console.log(memoryGame.try(position15, position16));
}

main();
