/*

Problem:

Given a sum of money, compute the minimum number of bills and coins that equal that sum. 
Assume you only have the following denominations:

Bills: [20, 10, 5, 1]
Coins: [0.25, 0.1, 0.05, 0.01]

Example: 
Input: 6.35

Output: 
- One 5: 1
- One 1: 1
- One 0.25: 1
- One 0.1: 1
- One 0.01: 1

*/

const bills: number[] = [20, 10, 5, 1]
const coins: number[] = [0.25, 0.1, 0.05, 0.01]

function minimumBillsAndCoins(sumOfMoney: number) {
    const change: { [key: number]: number } = {};

    while (sumOfMoney > 0) {
        let denomination: number;

        const minBill = Math.min(...bills);

        if (sumOfMoney >= minBill) {
            denomination = bills.find(bill => bill <= sumOfMoney)!;
        } else {
            denomination = coins.find(coin => coin <= sumOfMoney)!;
        }

        change[denomination] = (change[denomination] || 0) + 1;
        sumOfMoney -= denomination;
    }

    return change;
}

console.log(minimumBillsAndCoins(0.5));