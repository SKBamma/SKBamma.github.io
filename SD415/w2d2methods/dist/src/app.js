let x = 5;
let y = { x };
console.log(y); // {x : 5}
function sum1(arr) {
    return arr;
}
const foo = { sum1 };
console.log(foo);
console.log(foo.sum1);
console.log(foo.sum1([1, 2, 3]));
//test .........
/*write a for loop to print out the values of the properties according to the property names in the
propertyOrder array. You must use the properties array to access the values. You cannot directly
write console.log(numbers.one) */
const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 4444,
};
const propertyOrder = ["one", "four", "three", "two"];
for (const property of propertyOrder) {
    console.log(numbers[property]);
}
// calculator.js
export function setValues(val1, val2) {
    return [val1, val2];
}
export function sum(val1, val2) {
    return val1 + val2;
}
export function mul(val1, val2) {
    return val1 * val2;
}
//    export { setValues, sum, mul };
