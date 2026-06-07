/*

Crea un programa que sume los números en las posiciones correspondientes de dos arreglos.

Esto significa sumar el número en el índice 0 del primer arreglo con el número en el índice 0 del segundo arreglo, y así
sucesivamente. 

Asegúrate de que el programa pueda manejar arreglos de diferentes longitudes y sume los números correctamente. Además,
incluye manejo de errores para abordar situaciones como arreglos vacíos o arreglos con valores no numéricos. 

Ejemplo: 
[1,0,2,3,4] + [3,5,6,7,8,13,9] = [4,5,8,10,12,13,9]

*/

const addArrays = (array1: number[], array2: number[]) => {
    let message = ""
    if (array1.length === 0 || array2.length === 0) {
        return message += "No se permiten sumas con arreglos vacíos. Por favor, inténtelo de nuevo."
    } else {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (typeof array1[i] !== "number" || typeof array2[j] !== "number") {
                    return message += "No se permiten sumas con arreglos de otro tipo que no sea numéricos. Por favor, inténtelo de nuevo."
                }
            }
        }
        const totalSumArray: number[] = [];
        if (array1.length > array2.length) {
            while (array1.length > array2.length) {
                array2.push(0);
            }
        } else if (array2.length > array1.length) {
            while (array2.length > array1.length) {
                array1.push(0);
            }
        } 

        for(let i=0; i < array1.length; i++) {
            totalSumArray.push(array1[i] + array2[i]);
        }

        return totalSumArray;
    }
}

const array1: number[] = [1, 0, 2, 3, 4];
const array2: number[] = [3, 5, 6, 7, 8, 13, 9];
console.log(addArrays(array1, array2));