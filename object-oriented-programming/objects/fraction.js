/*

En este escenario, se te proporcionarán varias fracciones, y tu tarea es realizar diversas
operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es obtener el numerador y denominador resultantes de estas operaciones.

Para lograrlo, deberías definir dos atributos: el numerador y el denominador.

Además, implementarás métodos correspondientes para cada operación, devolviendo un objeto resultante con el 
numerador y el denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte del objeto como incluidos 
como parte de su funcion dentro del objeto mismo. 

const fraction1 = createFraction (3,4)
const fraction2 = createFraction(2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFraction(2, 3)

fraction3.add(fraction4)

*/

const createFraction = (numerator, denominator) => {
    return {
        numerator: numerator,
        denominator: denominator,
        multiply: function (fraction) {
            return {
                numerator: this.numerator * fraction.numerator,
                denominator: this.denominator * fraction.denominator
            }
        },
        split: function (fraction) {
            return {
                numerator: this.numerator * fraction.denominator,
                denominator: this.denominator * fraction.numerator
            }
        },
        subtract: function (fraction) {
            if (this.denominator === fraction.denominator) {
                if (this.numerator - fraction.numerator === 0) {
                    return 0
                } else {
                    return {
                        numerator: this.numerator - fraction.numerator,
                        denominator: this.denominator
                    }
                }
            } else {
                const finalFirstFraction = multiply(this, createFraction(fraction.denominator, fraction.denominator))
                const finalSecondFraction = multiply(fraction, createFraction(this.denominator, this.denominator))
                if (finalFirstFraction.numerator - finalSecondFraction.numerator === 0) {
                    return 0
                } else {
                    return {
                        numerator: finalFirstFraction.numerator - finalSecondFraction.numerator,
                        denominator: finalFirstFraction.denominator
                    }
                }
            }
        },
        add: function (fraction) {
            if (this.denominator === fraction.denominator) {
                return {
                    numerator: this.numerator + fraction.numerator,
                    denominator: this.denominator
                }
            } else {
                const finalFirstFraction = multiply(this, createFraction(fraction.denominator, fraction.denominator))
                const finalSecondFraction = multiply(fraction, createFraction(this.denominator, this.denominator))
                return {
                    numerator: finalFirstFraction.numerator + finalSecondFraction.numerator,
                    denominator: finalFirstFraction.denominator
                }
            }
        }
    }
}

function multiply(fraction1, fraction2) {
    return {
        numerator: fraction1.numerator * fraction2.numerator,
        denominator: fraction1.denominator * fraction2.denominator
    }
}

function split(fraction1, fraction2) {
    return {
        numerator: fraction1.numerator * fraction2.denominator,
        denominator: fraction1.denominator * fraction2.numerator
    }
}

function subtract(fraction1, fraction2) {
    if (fraction1.denominator === fraction2.denominator) {
        if (fraction1.numerator - fraction2.numerator === 0) {
            return 0
        } else {
            return {
                numerator: fraction1.numerator - fraction2.numerator,
                denominator: fraction1.denominator
            }
        }
    } else {
        const finalFirstFraction = multiply(fraction1, createFraction(fraction2.denominator, fraction2.denominator))
        const finalSecondFraction = multiply(fraction2, createFraction(fraction1.denominator, fraction1.denominator))
        if (finalFirstFraction.numerator - finalSecondFraction.numerator === 0) {
            return 0
        } else {
            return {
                numerator: finalFirstFraction.numerator - finalSecondFraction.numerator,
                denominator: finalFirstFraction.denominator
            }
        }
    }
}

function add(fraction1, fraction2) {
    if (fraction1.denominator === fraction2.denominator) {
        return {
            numerator: fraction1.numerator + fraction2.numerator,
            denominator: fraction1.denominator
        }
    } else {
        const finalFirstFraction = multiply(fraction1, createFraction(fraction2.denominator, fraction2.denominator))
        const finalSecondFraction = multiply(fraction2, createFraction(fraction1.denominator, fraction1.denominator))
        return {
            numerator: finalFirstFraction.numerator + finalSecondFraction.numerator,
            denominator: finalFirstFraction.denominator
        }
    }
}

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

console.log("Con funciones fuera del objeto: ")
console.log("Suma: ", add(fraction1, fraction2))
console.log("Resta: ", subtract(fraction1, fraction2))
console.log("Multiplicación: ", multiply(fraction1, fraction2))
console.log("División: ", split(fraction1, fraction2))

console.log("\n");

const fraction3 = createFraction(3, 4)
const fraction4 = createFraction(2, 3)

console.log("Con funciones dentro del objeto: ")
console.log("Suma: ", fraction3.add(fraction4))
console.log("Resta: ", fraction3.subtract(fraction4))
console.log("Multiplicación: ", fraction3.multiply(fraction4))
console.log("División:", fraction3.split(fraction4))