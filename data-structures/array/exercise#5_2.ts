/*

Yo are given an integer array nums. You are initially positioned at the array's first index, and each element in the array
represents your maximun jump at that position.

Return true if you can reach the last index, or false otherwise. 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes 

*/

function jumpGame(nums: number[]): boolean {
    let position = 0;

    while(typeof nums[position] === 'number') {
        if(position === nums.length - 1) {
            return true;
        } else if(nums[position] === 0) {
            return false;
        }

        position += nums[position];
    }

    return false;
}

const nums2: number[] = [2,3,1,1,4]
console.log(jumpGame(nums2));
const nums: number[] = [3,2,1,0,4];
console.log(jumpGame(nums));
