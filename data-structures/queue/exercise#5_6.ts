/*

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively.
All students stand in a queue. Each student either prefers square or circular sandwiches. The number of sandwiches in the cafeteria
is equal to the number of students. 
The sandwiches are placed in a stack. At each step:
If the student at the front of the queue prefers the sandwich on the top of the stack, they wil take it and leave the queue.
You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the ith sandwich in the stack
(i = 0 is the top of the stack) and students[j] is the preference of the jth student in the initial queue (j = 0 is the front
of the queue).
Return the numbers of students that are unable to eat.

Example 1:
Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.

Example 2:
Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3

Constraints:
1 <= students.length, sandwiches.length <= 100
students.length == sandwiches.length
sandwiches[i] is 0 or 1
students[i] is 0 or 1
*/

// students -> queue
// sandwiches -> stack
// circular -> 0
// square -> 1

const students: number[] = [1,1,1,0,0,1] 
const sandwiches: number[] = [1,0,0,0,1,1]

function lunchTime(students: number[], sandwiches: number[]) {
    let rotations = 0;
    while(students.length > 0 && rotations < students.length) {
        if(students[0] === sandwiches[sandwiches.length - 1]) {
            students.shift();
            sandwiches.pop();
            rotations = 0;
        } else {
            students.push(students.shift()!);
            rotations++;
        }
    }
    return students.length;
}

console.log(lunchTime(students, sandwiches));