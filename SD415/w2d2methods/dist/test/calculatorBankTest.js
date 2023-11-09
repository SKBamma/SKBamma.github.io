/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { setValues, sum, mul } from "../src/app.js"; //import objects used in the Mocha tests
describe("test calculator with values 2, 3", function () {
    let operand1 = 0;
    let operand2 = 0;
    before(function () {
        [operand1, operand2] = setValues(2, 3);
    });
    it("checks initial values 2 and 3", function () {
        assert.strictEqual(operand1, 2);
        assert.strictEqual(operand2, 3);
    });
    it("when 2 and 3 are entered, the sum is 5", function () {
        assert.strictEqual(sum(operand1, operand2), 5);
    });
    it("when 2 and 3 are entered, the product is 6", function () {
        assert.strictEqual(mul(operand1, operand2), 6);
    });
});
//banking test
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { bank } from "../src/bank.js"; //import objects used in the Mocha tests
describe("bank tests", function () {
    beforeEach(function () {
        console.log("Reset transactionsDB...");
        bank.transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }
        ];
    });
    it("checks initial balance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });
    it("checks initial balance of customer 1", function () {
        assert.strictEqual(bank.getBalance(1), 20);
    });
    it("checks initial balance of customer 1 after unallowed debit", function () {
        bank.debit(1, 1000);
        assert.strictEqual(bank.getBalance(1), -980);
    });
    it("checks initial balance of customer 1 after allowed debit", function () {
        bank.debit(1, 10);
        assert.strictEqual(bank.getBalance(1), 20);
    });
    /* the credit and debit are made in the bank.js file */
    it("balance after credit of 20 and debit of 1000 for customer 1", function () {
        assert.strictEqual(bank.bankBalance(), 85);
        bank.credit(1, 20);
        bank.debit(1, 1000);
        assert.strictEqual(bank.bankBalance(), -895);
    });
});
