// import { assert } from "chai";
import { doubleNumbers, doubleAge, filterAllEvenNumber, filterAgeGreaterThan10, findEvenNum } from "../src/app.js";
import { camelize, copySorted, sortByAge, shuffle, getAverageAge } from "../src/app.js";
let numArray = Array();
let peopleArray = Array();
describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });
    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNumbers(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]); //test for pure function
    });
    it("doubles age", function () {
        assert.deepEqual(doubleAge(peopleArray), [{ name: "Sam", age: 30 }, { name: "William", age: 12 }, { name: "Lucy", age: 26 }, { name: "Barney", age: 160 }]);
        assert.deepEqual(peopleArray, [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });
});
describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });
    it("filter all even numbers", function () {
        assert.deepEqual(filterAllEvenNumber(numArray), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]); //test for pure function
    });
    it("filter all age > 10", function () {
        assert.deepEqual(filterAgeGreaterThan10(peopleArray), [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
        assert.deepEqual(peopleArray, [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });
    it("find even", function () {
        assert.strictEqual(findEvenNum(numArray), 0);
        assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
        // });
        // it("find even age ", function () {
        //     assert.deepEqual(findAgeGreaterThan10(peopleArray), { name: "William", age: 6 });
        //     const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81  }];
        //     assert.deepEqual(findAgeGreaterThan10(peopleOddAge), undefined);
        // });
        it("includes even", function () {
            assert.strictEqual(numArray.includes(77), true);
            assert.strictEqual(numArray.includes(15), false);
        });
        /* complete the following similar to includes even test */
        it("includes even age -- write this test");
    });
});
describe('camelize', function () {
    it('should camelize background-color', function () {
        const result = camelize('background-color');
        assert.strictEqual(result, 'backgroundColor');
    });
    it('should camelize list-style-image', function () {
        const result = camelize('list-style-image');
        assert.strictEqual(result, 'listStyleImage');
    });
});
describe('copySorted', function () {
    it('it should be sorted ["HTML", "JavaScript", "CSS"] without changing original array', function () {
        const inputArray = ["HTML", "JavaScript", "CSS"];
        const result = copySorted(inputArray);
        assert.deepStrictEqual(result, ["CSS", "HTML", "JavaScript"]);
        // Check that the original array is unchanged
        assert.deepStrictEqual(inputArray, ["HTML", "JavaScript", "CSS"]);
    });
});
describe("sortByAge", function () {
    it("sorts in place by age", function () {
        const john1 = { name: "John", age: 25, id: "1" };
        const pete1 = { name: "Pete", age: 30, id: "2" };
        const mary1 = { name: "Mary", age: 28, id: "3" };
        const inputArray = [pete1, john1, mary1];
        const output = sortByAge(inputArray);
        assert.deepEqual(output, [john1, mary1, pete1]);
    });
});
describe('shuffle', function () {
    it('should shuffle the array', function () {
        const arrNum = [1, 2, 3];
        const originalArray = [...arrNum];
        const shuffledArray = shuffle(arrNum);
        assert.strictEqual(shuffledArray.length, originalArray.length);
        assert.deepStrictEqual(shuffledArray.sort(), originalArray.sort());
        assert.deepStrictEqual(arrNum, originalArray);
    });
});
/* write mocha test to get average age */
describe("getAverageAge", function () {
    it("gets the average age", function () {
        const john1 = { name: "John", age: 25, id: "1" };
        const pete1 = { name: "Pete", age: 30, id: "2" };
        const mary1 = { name: "Mary", age: 28, id: "3" };
        const inputArray = [pete1, john1, mary1];
        assert.equal(getAverageAge(inputArray).toFixed(3), "27.667");
    });
});
