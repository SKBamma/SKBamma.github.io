// console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    if (aa >= b && aa >= c) {
        return aa;
    }
    else if (b >= aa && b >= c) {
        return b;
    }
    else {
        return c;
    }
}
// function of sum of digits
export function sumDigits(integers) {
    let sum = 0;
    for (let i = 0; i < integers.length; i++) {
        sum += parseInt(integers.charAt(i));
    }
    return sum;
}
// function of product of digits
export function multDigit(nums) {
    let multiply = 1; // should be 0
    for (let i = 0; i < nums.length; i++) {
        multiply *= parseInt(nums.charAt(i));
    }
    return multiply;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    //IMPLEMENT THIS 
    // let arr: string[] = ["Suresh", "ritu","Bamma", "Shah"]
    let longestWordLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i].length) > longestWordLength) {
            longestWordLength = arr[i].length;
        }
    }
    return longestWordLength;
}
console.log("expected Suresh and length shoulb be 6: ", findLongestWord(["Suresh", "ritu", "Bamma", "Shah"]));
console.log("expected length shoulb be 18: ", findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
     const expected33 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const expected23 = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    const expected21 = [
        [1],
        [2]
    ];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
    let output = [];
    let count = 1;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(count++);
        }
        output.push(row);
    }
    return output;
}
