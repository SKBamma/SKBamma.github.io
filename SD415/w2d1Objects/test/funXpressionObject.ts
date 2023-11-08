/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

//import {double, times100, myMap} from "../src/fnExps.js";
import { double, times100, myMap, computeStudentScore, computeStudentScore1, gradeQuiz, gradeQuizLabeled } from "../src/app.js";

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
        assert.deepStrictEqual(myMap(testArray, function (num: number): number { return 3 * num }), [-30, 0, 30, 60]);
    });
    it("tests myMap on triples arrow function", function () {
        assert.deepStrictEqual(myMap(testArray, (num: number): number => 3 * num), [-30, 0, 30, 60]);
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

//testing gradeQuizLabeled
describe('gradeQuizLabeled', function () {
    const student1 = {
        studentId: 101,
        quizAnswer: [1, 1, 2, 4],
    };

    const student2 = {
        studentId: 102,
        quizAnswer: [2, 1, 2, 2],
    };

    const student3 = {
        studentId: 103,
        quizAnswer: [3, 1, 2, 4],
    };

    const quizArray = [student1, student2, student3];

    it('should return labeled scores for each student', function () {
        const labeledScores = gradeQuizLabeled(quizArray, [3, 1, 2, 4]);

        assert.deepStrictEqual(labeledScores, [
            { id: 101, score: 3 },
            { id: 102, score: 2 },
            { id: 103, score: 4 }
        ]);
    });
});



//books.html
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai"

import { Book, library, findTitles, findAuthors, findIDs, createBook } from "../src/book.js";  //import all of the app.js functions used in the Mocha tests


/*
Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
•	Before creating the webpage first write and test the following JavaScript functions:
o	createBook, which will take title, author, and libraryID as inputs.  It will create and return a new book object 
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

*/

describe("library", function () {

    //This should be used as the "library database" for testing--included in app.js
    // let library: Book[] = [
    //     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    //     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    //     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
    // ];

    const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
    const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
    const ids = [1254, 3245, 4264];


    it("find titles", function () {
        assert.deepEqual(findTitles(), titles);
    });

    it("find authors", function () {
        assert.deepEqual(findAuthors(), authors);
    });

    it("find ids", function () {
        assert.deepEqual(findIDs(), ids);
    });

    it("create book", function () {
        const newBook = { title: "My New Book", author: "Me Too", libraryID: 1144 };
        assert.deepEqual(createBook("My New Book", "Me Too", 1144), newBook);
    });

    it("create book and save to library", function () {
        //assumes createBook was called before this test--e.g., in prior it test
        const TEST_LIB: Book[] = [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
            { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
            { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
            { title: "My New Book", author: "Me Too", libraryID: 1144 }
        ];
        assert.deepEqual(library, TEST_LIB);

    });

});