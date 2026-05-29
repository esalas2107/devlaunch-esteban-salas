/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1] 
Output: 2

*/

const numbers: number[] = [1, 1, 0, 1, 1, 1];
const numbers2: number[] = [1, 0, 1, 1, 0, 1];

function maximunNumberConsecutiveOnes(binaryArray: number[]) {
    let maxCounter = 0;
    let counter = 0;

    for (let i = 0; i < binaryArray.length; i++) {
        if(maxCounter === 3) {
            return maxCounter;
        } else if (binaryArray[i] === 1) {
            counter += 1;
            maxCounter = Math.max(maxCounter, counter);
        } else {
            counter = 0;
        }
    }

    return maxCounter;
}


console.log(maximunNumberConsecutiveOnes(numbers));
console.log(maximunNumberConsecutiveOnes(numbers2));