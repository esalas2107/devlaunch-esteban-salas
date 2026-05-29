/*

There are n gas stations along a circular route, where the amount of gas at the ith station is gas [i].
You have a car with an unlimited gas tank and it costs[i] of gas to travel from the ith station to its next (i + 1)th station.
You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station´s index if you can travel around the circuit once in the 
clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique. 

Example 1:
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank is = 4 - 1 + 5 = 8
Travel to station 0. Your tank is = 4 - 1 + 5 = 7
Travel to station 1. Your tank is = 4 - 1 + 5 = 6
Travel to station 2. Your tank is = 4 - 1 + 5 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index. 

Example 2:
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can´t start at station 0 or 1, as there is enough gas to travel to the next station.
Let´s start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank is = 4 - 3 + 2 = 3
Travel to station 1. Your tank is = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can´t travel around the circuit once no matter where you start.  

Constraints:
n == gas.length == cost.length
1 <= n <= 105
0 <= gas[i], cost[i] <= 104
*/

function circularRoute(gas: number[], cost: number[], n: number) {
    let tank = 0;
    let currentTank = 0;
    let startIndex = 0;

    if (n === gas.length && n === cost.length) {
        for(let i=0; i < n; i++) {
            tank += gas[i] - cost[i];
            currentTank += gas[i] - cost[i];
            if(currentTank < 0) {
                currentTank = 0;
                startIndex = i + 1; 
            } 
        }
        return tank >= 0 ? startIndex : -1;
    } else {
        return -1
    }
}

const gas = [2,3,4]; 
const cost = [3,4,3];
console.log(circularRoute(gas, cost, 3));

const gas2 = [1,2,3,4,5]; 
const cost2 = [3,4,5,1,2];
console.log(circularRoute(gas2, cost2, 5));