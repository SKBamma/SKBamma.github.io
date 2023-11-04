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
let style = ["Jazz", "Blues"];
console.log(style);
// Append “Rock-n-Roll” to the end.
style.push("Rock-n-Roll");
console.log(style);
//Replace the value in the middle with “Classics”. 
style[1] = "Classics";
console.log(style);
//Strip off the first value of the array and show it.
console.log(style.shift());
console.log(style);
//Prepend Rap and Reggae to the array.
style.unshift("Rap", "Reggae");
console.log(style);
console.log("multi diminsnal array");
let myJSmatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(myJSmatrix);
for (let i = 0; i < myJSmatrix.length; i++) {
    for (let j = 0; j < myJSmatrix[i].length; j++) {
        console.log(myJSmatrix[i][j]);
    }
}
//for nested loop
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
console.log("The expected sum is 45: ", sumMatrix(matrix));
// Given an expression array exp, write a function, balanced(expression: string[]) to examine whether the pairs he of “{“, “}” are balanced.
const exp = ["{", "}", "{", "{", "}", "}"];
function balanced(exp) {
    let expE = [];
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "{") {
            expE.push(exp[i]);
        }
        else if (exp[i] === "}") {
            if (expE.length === 0) {
                return false;
            }
            expE.pop();
        }
    }
    return expE.length === 0; // if there is still brace left
}
console.log("expected is true ", balanced(exp));
// test case 2
const exp1 = ["{", "}", "{", "{", "}", "}", "}"];
console.log("expected is false ", balanced(exp1));
// function sayHi(): void {
//     console.log( "Hello" );
//    }
//    const myHi = sayHi;
//    console.log( sayHi ); // shows the function code
//    function higherOrder() { return sayHi; }
//W1D5 functional expression
//Write a function, double, that takes a number and returns 2 times the number. 
function double(numbs) {
    let result = 2 * numbs;
    return result;
}
console.log("expected answer is 10: ", double(5));
//2. Write a function times100 that takes a number and returns 100 times the number.
function times100(numbrs) {
    let result = 100 * numbrs;
    return result;
}
console.log("expected answer is 500: ", times100(5));
/*Write a function, myMap, that takes an array and a function and returns a new array that has the
function applied to each element of the input array. Use your myMap function with your
 double and times100 functions.
*/
/*
•Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
•Now write a function named findAverage, that takes an array as an argument and return average of the array values.
•Call findAverage function passing array you created in step1 and save the return result in a variable, average.
•Print the average, it should be 30 for this example.
•Create a second array with values from 1 to 9 and find the average of the array values.
•Should compute correct average for an array of any size.
*/
const score = [10, 20, 30, 40, 50];
// find ave
function finAverage(score) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
        // console.log(sum);
    }
    average = (sum / score.length);
    // console.log(average);
    return average;
}
console.log('the average score1', finAverage(score));
// new array
const score2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('the average of score2 ', finAverage(score2));
// generating  10 random and storein array called scores 
const scores = [];
for (let i = 0; i < 10; i++) {
    scores[i] = Math.ceil(Math.random() * 100);
}
console.log(scores);
/*
let arr1 = [5,6,7,8,9];
let arr2 = [34,35,66,77,87, 100];
Write a function, div5, that will log any numbers that are divisible by 5 to the console.
It should use a for..of loop. It should return the number of elements logged.
div5(arr1) will log 5, and return 1
div5(arr2) will log 35 and 100 and return 2 */
export function div5(arr) {
    let result = [];
    for (let x of arr) {
        if (x % 5 === 0) {
            result.push(x);
        }
    }
    return result;
}
//Testing
console.log("expected arr would be [5]: ", div5([5, 6, 7, 8, 9]));
console.log("expected arr would be [35,100]: ", div5([34, 35, 66, 77, 87, 100]));
/*
Write a JavaScript function “calcDifferential” that takes two parallel arrays
• The first input array contains daily high temperatures
• The second input array contains corresponding daily low temperatures
• Return the sum of all the daily temperature differentials
• If a high and low temperature are the same assign a difference of 1 since it is almost impossible for there not to be some slight change in temperature
*/
export function calcDifferential(arr1, arr2) {
    let difference = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] - arr2[i] != 0) {
            difference += (arr1[i] - arr2[i]);
        }
        else if ((arr1[i] - arr2[i] === 0)) {
            difference += 1;
        }
    }
    return difference;
}
//testing
console.log(" The excepted output would be 90 ", calcDifferential([80, 78, 82], [50, 48, 52]));
console.log(" The excepted output would be 32 ", calcDifferential([10, 20, 30, 40], [10, 20, 20, 20]));
