/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
//import {double, times100, myMap} from "../src/fnExps.js";
import { double, times100, myMap, computeStudentScore, computeStudentScore1, gradeQuiz } from "../src/app.js";
/* 1.	1.	Write a function, double, that takes a number and returns 2 times the number..  */
describe("double", function () {
    it("tests double 10", function () {
        assert.strictEqual(double(10), 20);
    });
    it("tests double 0", function () {
        assert.strictEqual(double(0), 0);
    });
    it("tests double -10", function () {
        assert.strictEqual(double(-10), -20);
    });
});
// /*  2.	Write a function times100 that takes a number and returns 100 times the number. */
describe("times100", function () {
    it("tests times100 10", function () {
        assert.strictEqual(times100(10), 1000);
    });
    it("tests times100 0", function () {
        assert.strictEqual(times100(0), 0);
    });
    it("tests times100 -10", function () {
        assert.strictEqual(times100(-10), -1000);
    });
});
/* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
describe("myMap", function () {
    //case1
    const testArray = [-10, 0, 10, 20];
    it("tests myMap on double", function () {
        assert.deepStrictEqual(myMap(testArray, double), [-20, 0, 20, 40]);
    });
    it("tests myMap on times100", function () {
        assert.deepStrictEqual(myMap(testArray, times100), [-1000, 0, 1000, 2000]);
    });
    //case 2
    const testArray1 = [-2, 10, 4, 30];
    it("tests myMap on double", function () {
        assert.deepStrictEqual(myMap(testArray1, double), [-4, 20, 8, 60]);
    });
    it("tests myMap on times100", function () {
        assert.deepStrictEqual(myMap(testArray1, times100), [-200, 1000, 400, 3000]);
    });
});
/* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.
Then write it using an arrow expression. */
describe("myMap Arrow Expression", function () {
    const testArray = [-10, 0, 10, 20];
    it("tests myMap on triples anonymous function", function () {
        assert.deepStrictEqual(myMap(testArray, function (num) { return 3 * num; }), [-30, 0, 30, 60]);
    });
    it("tests myMap on triples arrow function", function () {
        assert.deepStrictEqual(myMap(testArray, (num) => 3 * num), [-30, 0, 30, 60]);
    });
});
//testing student score
describe("computing student scores", function () {
    it("it test the given students score array [1, 1, 2, 4]", function () {
        const student1 = {
            studentId: 101,
            quizAnswer: [1, 1, 2, 4],
        };
        assert.deepEqual(computeStudentScore(student1, [3, 1, 2, 4]), 3);
    });
    it("it test the given students score array [2, 1, 2, 2]", function () {
        const student2 = {
            studentId: 102,
            quizAnswer: [2, 1, 2, 2]
        };
        assert.deepEqual(computeStudentScore(student2, [3, 1, 2, 4]), 2);
    });
    it("it test the given students score array [3, 1, 2, 4]", function () {
        const student3 = {
            studentId: 103,
            quizAnswer: [3, 1, 2, 4]
        };
        assert.deepEqual(computeStudentScore(student3, [3, 1, 2, 4]), 4);
    });
});
//testing student correct scores of each student
describe("finding the correct student scores", function () {
    it("it test the correct given students score array [1, 1, 2, 4]", function () {
        const student1 = {
            studentId: 101,
            quizAnswer: [1, 1, 2, 4],
        };
        assert.deepEqual(computeStudentScore1(student1, [3, 1, 2, 4]), [1, 2, 4]);
    });
    it("it test the correct given students score array [2, 1, 2, 2]", function () {
        const student1 = {
            studentId: 102,
            quizAnswer: [2, 1, 2, 2],
        };
        assert.deepEqual(computeStudentScore1(student1, [3, 1, 2, 4]), [1, 2]);
    });
    it("it test the correct given students score array [3, 1, 2, 4]", function () {
        const student1 = {
            studentId: 103,
            quizAnswer: [3, 1, 2, 4],
        };
        assert.deepEqual(computeStudentScore1(student1, [3, 1, 2, 4]), [3, 1, 2, 4]);
    });
});
/* Complete the function, gradeQuiz, that takes the quiz array and an array
of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.
assert.deepEqual(gradeQuiz(quizAnswers, [3, 1, 2, 4]), [3, 2, 3]);
*/
describe("Returning correct student scores", function () {
    it("it test the correct given students score array [1, 1, 2, 4]", function () {
        const student1 = {
            studentId: 101,
            quizAnswer: [1, 1, 2, 4],
        };
        const studentScores = gradeQuiz([student1], [3, 1, 2, 4]);
        assert.deepEqual(studentScores, [3]);
    });
    it("it test the correct given students score array [2, 1, 2, 2]", function () {
        const student2 = {
            studentId: 102,
            quizAnswer: [2, 1, 2, 2],
        };
        const studentScores = gradeQuiz([student2], [3, 1, 2, 4]);
        assert.deepEqual(studentScores, [2]);
    });
    it("it test the correct given students score array [3, 1, 2, 4]", function () {
        const student3 = {
            studentId: 103,
            quizAnswer: [3, 1, 2, 4],
        };
        const studentScores = gradeQuiz([student3], [3, 1, 2, 4]);
        assert.deepEqual(studentScores, [4]);
    });
});
