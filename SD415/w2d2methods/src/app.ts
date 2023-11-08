let x = 5;
let y = { x };
console.log(y); // {x : 5}
function sum(arr: number[]): number[] {
     return arr;
}
const foo = { sum };
console.log(foo);
console.log(foo.sum);
console.log(foo.sum([1, 2, 3]));
//test .........

/*write a for loop to print out the values of the properties according to the property names in the 
propertyOrder array. You must use the properties array to access the values. You cannot directly 
write console.log(numbers.one) */
const numbers: {[key: string]: number} = {
     one: 1,
     two: 22,
     three: 333,
     four: 4444,
};
const propertyOrder = ["one", "four", "three", "two"];
for (const property of propertyOrder) {
     console.log(numbers[property]);
}