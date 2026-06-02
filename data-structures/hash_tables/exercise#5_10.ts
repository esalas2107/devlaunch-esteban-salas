/*

Dado un array hay que encontrar si existe un par que sumados den exactamente el target correspondiente.

*/

const numbs = [2, 5, 4, 1, 8, 3]

const target = 13

function findPairSum(arrayOfNumbers: number[], target: number) {
    /* let finalPair: number[] = [];
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        for(let j = i + 1; j < arrayOfNumbers.length; j++) {
            if(numbs[i] + numbs[j] === target) {
                finalPair.push(numbs[i]);
                finalPair.push(numbs[j]);
            }
        }
    }
    return finalPair; */

    let iteratedValues: Set<number> = new Set<number>();
    let finalPair: number[] = [];

    for(let i=0; i < arrayOfNumbers.length; i++) {
        let complement: number = target - arrayOfNumbers[i];
        if(iteratedValues.has(complement)) {
           finalPair.push(arrayOfNumbers[i]);
           finalPair.push(complement);
           return finalPair;
        } else {
            iteratedValues.add(arrayOfNumbers[i]);
        }
    }
}

console.log(findPairSum(numbs, target));