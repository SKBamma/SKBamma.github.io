/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

//import {maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray} from "./arrays.js";
import { maxOfThree, sumDigits, multDigit, findLongestWord, generateArray, div5, calcDifferential } from "../src/app.js";

/* 1.	1.	Define a function maxOfThree() that takes three numbers as 
arguments and returns the largest of them.  */
describe("maxOfThree", function () {
    it("tests 1 2 3", function () {
        assert.strictEqual(maxOfThree(1, 2, 3), 3);
    });
    it("tests 1 3 2", function () {
        assert.strictEqual(maxOfThree(10, 30, 20), 30);
    });
    it("tests 2 1 3", function () {
        assert.strictEqual(maxOfThree(2, 1, 3), 3);
    });
    it("tests 2 3 1", function () {
        assert.strictEqual(maxOfThree(22, 33, 11), 33);
    });
    it("tests 3 2 1", function () {
        assert.strictEqual(maxOfThree(3, 2, 1), 3);
    });
    it("tests 3 1 2", function () {
        assert.strictEqual(maxOfThree(333, 111, 222), 333);
    });
    it("tests -1 -2 -3", function () {
        assert.strictEqual(maxOfThree(-1, -2, -3), -1);
    });
    it("tests -1 -2 -2", function () {
        assert.strictEqual(maxOfThree(-1, -2, -2), -1);
    });
    it("tests 5 5 -1", function () {
        assert.strictEqual(maxOfThree(5, 5, -1), 5);
    });
    it("tests -2 0 -2", function () {
        assert.strictEqual(maxOfThree(-2, 0, -2), 0);
    });
    it("tests 6 6 6", function () {
        assert.strictEqual(maxOfThree(6, 6, 6), 6);
    });
});

/*
2.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
describe("sum", function () {
    it("tests sum of 1 2 3 and 1 2 3 4", function () {
        const exact = sumDigits("1234");
        assert.strictEqual(+exact.toFixed(2), 10);
    });
    it("sum of 8", function () {
        const exact = sumDigits("8");
        assert.strictEqual(+exact.toFixed(2), 8);
    });
    it("sum of 102", function () {
        const exact = sumDigits("102");
        assert.strictEqual(+exact.toFixed(2), 3);
    });
});


// Test case for multiplication of  input digits
describe("test of product of input digits", function () {
    it("product of input 1234", function () {
        const exact = multDigit("1234");
        assert.strictEqual(+exact.toFixed(2), 24);
    });
    it("product of input 102", function () {
        const exact = multDigit("102");
        assert.strictEqual(+exact.toFixed(2), 0);
    });
    it("product of input 8", function () {
        const exact = multDigit("8");
        assert.strictEqual(+exact.toFixed(2), 8);
    });
    it("product of input 1259", function () {
        const exact = multDigit("1259");
        assert.strictEqual(+exact.toFixed(2), 90);
    });
});

/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a", "test", "longest"]), 7);
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), 18);
    });
    it("tests longest with equal length words", function () {
        assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
    });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
    });
});


// /*
// 4.	Reverse an Array 
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and 
// reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, 
// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its 
// elements. This is a method that is very space efficient.  It does not create a new array or copy of the array.  
// It returns the original array. Neither may use the standard reverse method. 
// */
// describe("reverseArray", function () {
//     it("tests reverseArray odd number elements", function () {
//         assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
//     });
//     it("tests reverse even number elements", function () {
//         assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
//       });
//     it("tests reverse in place even number elements", function () {
//         assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
//     });
//     it("tests reverse odd number elements", function () {
//         assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
//     });
//     it("tests reverseinplace odd number elements", function () {
//         assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
//     });
//     it("tests that the original array is returned", function () {
//         const testArr = [1, 2, 3, 4, 5];
//         assert.strictEqual(reverseArrayInPlace(testArr), testArr); //element order may be different, but it is the same reference
//     });
// });

// /*
// 5.  Write a function, scoreExams, that takes an array of arrays of student answers and an array of the correct answers.  
// It should compare each student’s answers against the correct answers and return an array holding the scores of each student.  The score 
// for each student is a count of the number of correct answers (i.e., matches with the key of correct answers).  For example

// const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
// const correctAnswers = [3, 1, 2];
// scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
// */

// describe("score exam", function () {
//     const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
//     const correctAnswers = [3, 1, 2,4];
//     it("exam with 3 students", function () {
//         assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3,2,3]);
//     });
//     it("exam with 3 students: one student has all incorrect answers", function () {
//         assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [1,2, 3,1]], correctAnswers), [3,2,0]);
//     });
//     it("exam with 3 students: one student has all correct answers", function () {
//         assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2],[3, 1, 2,4]], correctAnswers), [3,2,4]);
//     });
// });

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows: */
describe("generate array", function () {
    const expected33 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [[1, 2, 3], [4, 5, 6]];
    const expected21 = [[1], [2]];
    it("expected33", function () {
        assert.deepEqual(generateArray(3, 3), expected33);
    });
    it("expected23", function () {
        assert.deepEqual(generateArray(2, 3), expected23);
    });
    it("expected21", function () {
        assert.deepEqual(generateArray(2, 1), expected21);
    });
});

//testing div5
describe("divisble by 5", function () {
    it("tests of divisible of 5 in array [5,6,7,8,9]", function () {
        const exact = div5([5, 6, 7, 8, 9]);
        assert.deepStrictEqual(exact, [5]);
    });
    it("tests of divisible of 5 in array [15,-25,17,800,-9]", function () {
        const exact = div5([15, -25, 17, 800, -9]);
        assert.deepStrictEqual(exact, [15, -25, 800]);
    });
    it("tests of divisible of 5 in array [5,16,75,85,19]", function () {
        const exact = div5([5, 16, 75, 85, 19]);
        assert.deepStrictEqual(exact, [5, 75, 85]);
    });
});

//Test cases of calDifferential function
describe("Difference of high and low temp", function () {
    it("test of case 1 ([80, 78, 82], [50, 48, 52])", function () {
        const exact = calcDifferential([80, 78, 82], [50, 48, 52]);
        assert.strictEqual(+exact, 90);
    });
    it("test of case 2 ([10, 20, 30, 40], [10, 20, 20, 20])", function () {
        const exact = calcDifferential([10, 20, 30, 40], [10, 20, 20, 20]);
        assert.strictEqual(+exact, 32);
    });
    it("test of case 3 ([10, 20, 60, 40], [10, 20, 59, 40])", function () {
        const exact = calcDifferential([10, 20, 60, 40], [10, 20, 59, 40]);
        assert.strictEqual(+exact, 4);
    });
});