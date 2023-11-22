/*
1. write a function, averagePoints, to get an array containing the average points across for each player .
Try with a regular for..of loop and then using map.
const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players))
*/
type Player = {
    name: string;
    points: number[];
};

function averagePoints(players: Player[]): number[] {
    const averages: number[] = [];

    // Using a regular for...of loop
    for (const player of players) {
        const totalPoints = player.points.reduce((sum, point) => sum + point, 0);
        const average = totalPoints / player.points.length;
        averages.push(average);
    }
    return averages;
}

const player1: Player = { name: "Bob", points: [1, 2, 1] };
const player2: Player = { name: "Andre", points: [2, 0, 1] };
const player3: Player = { name: "Max", points: [1, 1, 1] };
const players: Player[] = [player1, player2, player3];

console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints(players)); 

/*
2. const array123 = [1, 2, 3]
use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9] */
function mySquare(arr: number[]): number[] {
    return arr.map((num) => num * num);
}
const array123 = [1, 2, 3]
console.log(`expect [1, 4, 9] ${mySquare(array123)}`);

/*
3. Implement the ask function, which should callback the yes function if the user answers yes to the question, else
calls back the no function.
const prompt = require("prompt-sync")();
function ask(question, yes, no) {
}
function showOk() {
 console.log ( "You agreed." );
}
function showCancel() {
 console.log ( "You canceled the execution." );
}
ask("Do you agree?", showOk, showCancel);*/
const question = "DO you know Maharishi Mahesh Yogi";
function ask(question: string, yes: () => void, no: () => void): void {
    const useResponce = question.toLowerCase();
    if (useResponce === "yes") {
        yes();
    } else {
        no();
    }
}
function showOk(): void {
    console.log("You are agreed");
}
function showCancel(): void {
    console.log("You have cancelled");
}
//calling the function
ask(question, showOk, showCancel);

/*
4. replace the showCancel and showOk function declaration with arrow functions in the ask call*/
const question1 = "DO you know Maharishi Mahesh Yogi";
function ask1(question1: string, yes1: () => void, no1: () => void): void {
    const useResponce1 = question1.toLowerCase();
    useResponce1 === 'yes' ? yes1() : no1();
}
//
ask(question1, () => console.log("you have aggred."), () => console.log("you have cancelled"));

// 5.
setTimeout(sayHi, 3000);
function sayHi() {
    console.log('hello')
}// after 0 second

// 6. 
type Point = {
    a: number;
    b: number;
    c: number;
};
function mash(arr: Point[]): number[] {
    return arr.map(({ a, b, c }) => a * b * c);
}

const abcs = [{ a: 1, b: 2, c: 3 }, { a: 2, b: 2, c: 2 }, { a: 5, b: 2, c: 3 }];
console.log(`expect [6, 8, 30]: ${mash(abcs)}`);


//7.
type InnerObject = {
    name: string;
    value: number;
};

type OuterObject = {
    id: number;
    data: InnerObject[];
};

// Sample data
const dataArray: OuterObject[] = [
    {
        id: 1,
        data: [
            { name: 'A', value: 10 },
            { name: 'B', value: 20 },
        ],
    },
    {
        id: 2,
        data: [
            { name: 'C', value: 30 },
            { name: 'D', value: 40 },
        ],
    },
    {
        id: 3,
        data: [
            { name: 'E', value: 50 },
            { name: 'F', value: 60 },
        ],
    },
];

// 1. Write a function that takes the dataArray and returns the total sum of all values in the inner objects.
function getTotalSum(dataArray: OuterObject[]): number {
    return dataArray.reduce((sum, outerObj) => {
        return sum + outerObj.data.reduce((innerSum, innerObj) => innerSum + innerObj.value, 0);
    }, 0);
}

// 2. Write a function that takes the dataArray and returns an array of names from all inner objects.
function getAllNames(dataArray: OuterObject[]): string[] {
    return dataArray.reduce((names, outerObj) => {
        return names.concat(outerObj.data.map(innerObj => innerObj.name));
    }, [] as string[]);
}

// 3. Write a function that takes the dataArray and an id, and returns the sum of values for the inner objects of the specified id.
function getSumById(dataArray: OuterObject[], id: number): number {
    const targetObj = dataArray.find((outerObj) => outerObj.id === id);

    if (targetObj) {
        return targetObj.data.reduce((sum, innerObj) => sum + innerObj.value, 0);
    }

    return 0;
}

// Example usage:
const totalSum = getTotalSum(dataArray);
console.log('Total Sum:', totalSum);

const allNames = getAllNames(dataArray);
console.log('All Names:', allNames);

const sumById = getSumById(dataArray, 1);
console.log('Sum for ID 1:', sumById);

/* 8. Write a timer function in typescript timer415, that takes a number of seconds as its arguments and 
logs the time remaining to the console. Eg, timer425(10) will immediately log 10, then after 1 second 9,
 then another second 8, ect down to 0.
*/
// function timer415(seconds: number): void {
//     if (seconds < 0) {
//         console.log('Invalid input. Please provide a non-negative number of seconds.');
//         return;
//     }

//     console.log(seconds);

//     const intervalId = setInterval(() => {
//         seconds--;

//         if (seconds >= 0) {
//             console.log(seconds);
//         } else {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// Example usage:
// timer415(10);

/* 9. write a recursive function in ts, recursivePrimes, that will log all the prime numbers from n to 0.
 For example, recursivePrime(20) should log 19, 17, 13, 11, 7,3. you shoud write a helper function for determining
  prime.
*/
function recursivePrimes(n: number): void {
    if (n < 2) {
        return;
    }
    if (isPrime(n)) {
        console.log(n)
    }
    recursivePrimes(n - 1)
}
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// testing
recursivePrimes(20);

/*9. Write a recursive function in typescript, nodeWalker, that will log the names of all the nodes to the console.
let node4 = {
name: "label",
 value: "Name", 
children: null
};
let node5 = {
name: "input",
value: "this was typed by a user", 
children: null
};
let node3 = {
name: "p",
value: "This is text in the a paragraph", 
children: null
};
let node2 = {
name: "div",
 value: null, 
children: [node4, nodes5]
};
let node1 = {
name: "body", 
children: [node2, node3], 
value: null,
};*/
type Nodes = {
    name1: string;
    value: string | null | undefined;
    children: Nodes[] | null | undefined;
};

let node4: Nodes = {
    name1: "label",
    value: "Name",
    children: null
};

let node5: Nodes = {
    name1: "input",
    value: "this was typed by a user",
    children: null
};

let node3: Nodes = {
    name1: "p",
    value: "This is text in a paragraph",
    children: null
};

let node2: Nodes = {
    name1: "div",
    value: null,
    children: [node4, node5]
};

let node1: Nodes = {
    name1: "body",
    children: [node2, node3],
    value: null,
};

function nodeWalker(node: Nodes): void {
    console.log(node.name1);
    if (node.children) {
        for (const childNode of node.children) {
            nodeWalker(childNode);
        }
    }
}
nodeWalker(node1);

/* 9. const arrar = [ { name: "ram", age: 29},  { name: "shyam", age: 40},  { name: "ganga", age: 19} ]; 
get average age, round the result to keep only two decimals. make a function in ts */
type Person = {
    name: string;
    age: number;
};
const array: Person[] = [
    { name: "ram", age: 29 },
    { name: "shyam", age: 40 },
    { name: "ganga", age: 19 }
];
function getAverageAge(people: Person[]): number {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / people.length;
    return Math.round(averageAge * 100) / 100;
}
console.log(getAverageAge(array));
// find the oldest man( must use an approriate array method).
function findOldestPerson(people: Person[]): Person | null {
    if (people.length === 0) {
        return null;
    }
    const oldestPerson = people.reduce((oldest, current) => {
        if (current.age > oldest.age) {
            return current;
        } else {
            return oldest;
        }
    }, people[0]);
    return oldestPerson;
}
/* 10. rewrite the following function in ts as an arrow function
function printMe()
{ console.log("hello");} */
const printMe = () => {
    console.log("hello");
};

// Example usage:
printMe();

/* 11. write functions in ts executor, add, and mult as defined by the test below 
describe("executor", function(){
    it ("tests add", function() {
    assert.strictEqual(executor(add, 5, 10), 15);
    });
    it("tests mult", function() {
    assert.strictEqual(executor(mult, 5, 10), 50);
    }); */
// Function to add two numbers
const add = (a: number, b: number): number => a + b;

// Function to multiply two numbers
const mult = (a: number, b: number): number => a * b;

// Executor function
const executor = (operation: (a: number, b: number) => number, a: number, b: number): number => {
    return operation(a, b);
};

/* 
Create an object calculator with two methods using an object literal: 
getValues(operand1, operand2) takes two values and saves them as object properties. 
sum() returns the sum of saved values.
 mul() multiplies saved values and returns the result.
let calculator = {
// . your code…
calculator.setValues(5, 10);
console.log( "expect 15: ", calculator.sum() ); 
console.log("expect 50: ", calculator.mul());
*/
type Calculator = {
    operand1: number | null;
    operand2: number | null;
    getValues: (operand1: number, operand2: number) => void;
    sum: () => number | null;
    mul: () => number | null;
};

const calculator: Calculator = {
    operand1: null,
    operand2: null,

    getValues: function (operand1: number, operand2: number): void {
        this.operand1 = operand1;
        this.operand2 = operand2;
    },

    sum: function (): number | null {
        if (this.operand1 !== null && this.operand2 !== null) {
            return this.operand1 + this.operand2;
        }
        return null;
    },

    mul: function (): number | null {
        if (this.operand1 !== null && this.operand2 !== null) {
            return this.operand1 * this.operand2;
        }
        return null;
    },
};

// Example usage:
calculator.getValues(5, 10);
const sumResult = calculator.sum();
const mulResult = calculator.mul();

console.log("Sum Result:", sumResult !== null ? `Expect ${sumResult}` : "Operands are not set");
console.log("Mul Result:", mulResult !== null ? `Expect ${mulResult}` : "Operands are not set");

// use sort to sort an array of numbers in aescending order [4,2,8,15] in typescript
const numbers: number[] = [4, 2, 8, 15];
const sortedNumbers: number[] = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);
const sortedNumDescending: number[] = numbers.sort((a, b) => b - a);
console.log(sortedNumDescending);

const names: string[] = ["ram", "sita", "hari"];

// Sort the array in ascending order
const sortedNames: string[] = names.sort();

console.log("Sorted Names (Ascending):", sortedNames);

// Sorting in descending order
const descendingNames: string[] = [...names].sort((a, b) => b.localeCompare(a));
console.log("Descending Order:", descendingNames);

/* 12.
use split join and sort to take the words in a string and reorder them by shortest to longest in typescript*/
const inputstring: string = "apple pear banana kiwi orange pineapple grapes";
// split the strings in to the array of words
const words: string[] = inputstring.split(" ");//[ 'apple', 'pear', 'banana', 'kiwi', 'orange', 'pineapple', 'grapes' ]
console.log(words);
// sort the array based on shortest to longest
words.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(words);//[ 'kiwi', 'pear', 'apple', 'banana', 'grapes', 'orange', 'pineapple' ]
//join the sorted array
const resultString: string = words.join(" ");
console.log(resultString);//kiwi pear apple banana grapes orange pineapple

// 12. 
let lengths: string[] = ["Bilbo", "gandalf", "nazgul"].map((item: string, index: number): string =>
    `${index}: ${item.length}`);

console.log(lengths);

function logOddSquare(n: number): void {
    // Base case: Stop recursion when n is less than 1
    if (n < 1) {
      return;
    }
    // If n is odd, log its square
    if (n % 2 !== 0) {
      console.log(n * n);
    }
    // Recursively call the function with the next odd number
    logOddSquare(n - 2);
  }
  
  // Example usage:
  logOddSquare(9);
  