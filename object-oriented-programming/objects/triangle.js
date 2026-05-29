/*

Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados
y tres vértices. De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo válido,
la suma de las longitudes de dos lados cualesquiera debe ser mayor que la longitud del tercer lado.

Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspodiente a uno de sus lados.

Además, se requiere una función para validar si los dos lados cumplen con el teorema de la desigualdad del triángulo.

Por ejemplo, considera un triángulo con longitudes de lados: a = 7, b = 10 y c= 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par de lados es mayor que la longitud 
del lado restante.

En este caso, verificamos si (b + c) > a, (a + c) > b y (a + b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triángulo. 

*/

const prompt = require("prompt-sync")()

const firstSide = parseInt(prompt("Digite el primer lado del triángulo: "))
const secondSide = parseInt(prompt("Digite el segundo lado del triángulo: "))
const thirdSide = parseInt(prompt("Digite el tercer lado del triángulo: "))

const triangle = {
    a: firstSide,
    b: secondSide, 
    c: thirdSide,
    innequalityTeorem: function() {
        if (((this.b + this.c) > this.a) && ((this.a + this.c) > this.b) && ((this.a + this.b) > this.c)) {
            return true
        } else {
            return false
        }
    }
}

console.log(triangle, `Cumple con el teorema de la desigualdad: ${triangle.innequalityTeorem()}`)

/*

Solución Anthony:

const t1 = {
    a: 7,
    b: 10, 
    c: 5
}

const isValidTriangle = (triangle) => {
    const {a,b,c} = triangle -> destructuración de un objeto (sacarle sus propiedades)
    
    return (b + c) > a, && (a + c) > b && (a + b) > c
}

*/