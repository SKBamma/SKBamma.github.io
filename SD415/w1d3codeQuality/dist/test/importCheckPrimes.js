//suppose have many functions to test and want tests in separate file
import { assert } from "chai";
/* import from function.ts module-- note the .js extension (even though actual file is .ts */
import { checkPrime } from "../src/function.js";
describe("checkPrime returns true if argument is prime", function () {
    it("37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    });
});
