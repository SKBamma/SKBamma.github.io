let x = 5;
let y = { x };
console.log(y); // {x : 5}
function sum1(arr: number[]): number[] {
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
const numbers: { [key: string]: number } = {
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

export function setValues(val1: number, val2: number): number[] {
     return [val1, val2];
}

export function sum(val1: number, val2: number): number {
     return val1 + val2;
}

export function mul(val1: number, val2: number): number {
     return val1 * val2;
}

//    export { setValues, sum, mul };
let user = {
     name: "john",
     age: 30,
     sayHi: function () {
     }
};
user.sayHi = function () {
     console.log("Hello");
}
user.sayHi();

let user1 = {
     name: "john",
     age: 40,
     sayHi: function () {
          console.log(this.name);
     }
};
//    user.sayHi = function(){
//      console.log("Hello");
//    }
user1.sayHi();

//typescript
type Person = {
     name: string;
     age: number;
     job: string;
     sayHi(this: Person): void;
}
const manager: Person = {
     name: "john",
     age: 20,
     job: "Software Engineer",
     sayHi: sayHowdy
};
const intern: Person = {
     name: "Ben",
     age: 21,
     job: "Software Engineer Intern",
     sayHi: sayHowdy
};
function sayHowdy(this: Person) {
     console.log("Hello, my name is ", this.name, ". I am", this.age, ". My job is", this.job);
}
manager.sayHi();
intern.sayHi();



