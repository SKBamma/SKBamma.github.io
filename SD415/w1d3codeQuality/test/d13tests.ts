/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"
import { isVowel } from "../src/vowel"
import { computeSalesCommission } from "../src/sales.js"
import { compoundInterest } from "../src/saving.js"
import { calcDownpayment } from "../src/calDownPayment.js"
// import{ calcDistance } from " ../src/distanceCal.js"


//Testing vowel function
describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

//Testing computeSalesCommission function

describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});


//Testing compoundInterest
describe("test of compoundInterest", function () {
    it("tests $100 for 1 year at 10% monthly compound", function () {
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 109.56);
    });
    it("tests $10000 for 5 years at 10% monthly compound", function () {
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16401.75);
    });
});

//Testing CalcDownpayment Function
describe("test of calcDownpayment", function () {
    it("costs of house $ 40000", function () {
        const exact = calcDownpayment(40000);
        assert.strictEqual(+exact.toFixed(2), 2000);
    });
    it("costs of house $ 50000", function () {
        const exact = calcDownpayment(50000);
        assert.strictEqual(+exact.toFixed(2), 2500);
    });
    it("costs of house $ 100000", function () {
        const exact = calcDownpayment(100000);
        assert.strictEqual(+exact.toFixed(2), 7500);
    });
    it("costs of house $ 250000", function () {
        const exact = calcDownpayment(250000);
        assert.strictEqual(+exact.toFixed(2), 25000);
    });
});

//testing the distance between two points
