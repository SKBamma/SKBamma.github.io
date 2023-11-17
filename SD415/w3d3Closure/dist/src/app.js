function makeCounter1() {
    let count = 0;
    return function (increment) {
        increment = increment || 1;
        count += increment;
        return count;
    };
}
const myCount = makeCounter1();
//console
console.log(myCount(5));
console.log(myCount(10));
// making the function name findHighScores
function findHighScores(teamStats) {
    return teamStats.map(player => {
        const highScore = player.stats.reduce((maxPoints, game) => Math.max(maxPoints, game.points), 0); // using reduce to find max
        return { jersey: player.jersey, high: highScore }; // returning the jersey and max score
    });
}
// console.log("Expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: ", findHighScores(teamStats));
/* CLASS EXERCISE
Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc,
 which is an inner function; innerFunc will increment the count variable and return the incremented value.
 makeCounter should return innerFunc. Call it twice to make different counters, counter1 and counter2
*/
function makeCounter() {
    let count = 0;
    function innerFunc() {
        count++;
        return count;
    }
    return innerFunc;
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
function a() {
    const x = 20;
    console.log(x); // consult Global for x and print 20 from Global
}
function b() {
    const x = 10;
    a(); // consult Global for a
}
b();
function makeCounter2() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter2();
console.log(`expect 0 ${counter()}`); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter());
console.log(counter());
//
function makeWorker3() {
    let name1 = "Pete";
    return function () {
        console.log(name1);
    };
}
let name1 = "John";
let work = makeWorker3();
work();
// example 2
let name2 = "John";
function sayHi() {
    console.log("Hi, " + name2);
}
name2 = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
console.log(name2);
//example3
let phrase = "Hello";
if (true) {
    let user = "john";
    console.log(phrase, user);
}
//console.log(user) // can not found error
//does a function pick latest changes?
let name4 = "John";
function sayHi2() {
    console.log("Hi, " + name4);
}
name4 = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
//which variab;es are aviables
function makeWorker2() {
    let name4 = "Pete";
    return function () {
        console.log(name4);
    };
}
//   let name4 = "John";
// create a function
let work2 = makeWorker2();
// call it
work2(); // what will it show?// pete
//are counters independends
function makeCounter3() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter3 = makeCounter();
let counter4 = makeCounter();
console.log(counter3()); // 0
console.log(counter3()); // 1
console.log(counter4()); // ?
console.log(counter4()); // ?
//counter object
// function Counter() {
//     let count = 0;
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
//   let counter = new Counter();
//   alert( counter.up() ); // 1
//   alert( counter.up() ); // 2
//   alert( counter.down() ); // 1
// sum with closures
function sum(a) {
    return function (b) {
        return a + b;
    };
}
console.log(sum(4)(5));
console.log(sum(12)(-15));
console.log(sum(40)(50));
//filter inBetween
export function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(2, 6)));
export function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1, 2, 10, 5])));
function byField(fieldName) {
    return (b, c) => b[fieldName] > c[fieldName] ? 1 : -1;
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField("age")));
console.log(users.sort(byField("name")));
// Army of function
export function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            return j;
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
export function createShoppingCart() {
    const items = [];
    function addItem(name, price) {
        items.push({ name, price });
    }
    function removeItem(name) {
        const index = items.findIndex(item => item.name === name);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }
    function getTotal() {
        return items.reduce((total, item) => total + item.price, 0);
    }
    return {
        addItem,
        removeItem,
        getTotal
    };
}