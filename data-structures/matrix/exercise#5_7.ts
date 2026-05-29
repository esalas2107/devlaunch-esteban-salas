/*

Juego de Gato

*/


type Value = "X" | "O"

const minRowColumnQuantity = 0;
const maxRowColumnQuantity = 3;
class TicTacToe {
    private board: (Value | null)[][];

    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    public makeAMove(row: number, column: number, value: Value) {
        const isMoveInRange = (row >= minRowColumnQuantity && row < maxRowColumnQuantity) && (column >= minRowColumnQuantity && column < maxRowColumnQuantity)
        const isSpaceOccupied = this.board[row][column] == "X" || this.board[row][column] == "O";

        if (isMoveInRange) {
            if (!isSpaceOccupied) {
                this.board[row][column] = value;
                const result = this.winner();
                if(result) console.log(result);
            } else {
                console.log("Error: intentó acceder a una casilla ya ocupada.")
            }
        } else {
            console.log("Error: su jugada se encuentra en una casilla fuera del rango del tablero.")
        }
    }

    public toString() {
        return this.board.map(row => row.join(" ")).join("\n");
    }

    private winner() {
        const winnerCombinations = [
            // Rows
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],

            // Columns
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],

            // Diagonals
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[0][2], this.board[1][1], this.board[2][0]]
        ]
        for(const combination of winnerCombinations) {
            const matchXWinner = (combination[0] === "X") && (combination[1] === "X") && (combination[2] === "X") 
            const matchOWinner = (combination[0] === "O") && (combination[1] === "O") && (combination[2] === "O")
            if(matchXWinner) {
                return "El ganador es: el jugador con el símbolo X."
            } else if(matchOWinner) {
                return "El ganador es: el jugador con el símbolo O."
            }
        }
        return null;
    }
}

const newGame = new TicTacToe();
newGame.makeAMove(0, 0, "X");
newGame.makeAMove(0, 1, "O");
newGame.makeAMove(1, 1, "X");
newGame.makeAMove(2, 0, "O");
newGame.makeAMove(2, 2, "X");
console.log(newGame.toString());

