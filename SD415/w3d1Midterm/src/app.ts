// import { Session } from "inspector";

const foo = function (a: number, b: number): void {
    return console.log(a + b);
}
const result = foo(10, 5);
// console.log(foo);
// firstLast.ts
export function firstLast(names: string[]): { firstName: string, lastName: string }[] {
    return names.map(name => {
        const [firstName, lastName] = name.split(' ');
        return { firstName, lastName };
    });
}

// replaceEnds.ts
// export function replaceEnds(arr: number[], firstElem: number, secondElem: number,
//     thirdElem: number, fourthElem: number): number[] {
//     const newArr = arr.slice(); // Create a copy of the original array to keep it unchanged
//     newArr.splice(0, 2, firstElem, secondElem); // Replace the first two elements
//     newArr.splice(-2, 2, thirdElem, fourthElem); // Replace the last two elements
//     return newArr;}


function replaceEnds(nums: number[], start: number, end: number): number[] {
    let result = nums.slice(); //  [1, 2, 3, 4, 5] copy the whole array to make it pure
    result.splice(0, 1, start);
    console.log(result);
    result.splice(nums.length - 1, 1, end);
    return result;
}
const nums = [1, 2, 3, 4, 5];
console.log("Expected [9,2,3,4,100]", replaceEnds(nums, 9, 100));
console.log("slice Eg = ", nums.slice(0, 2)); // [ 1, 2 ]
console.log("nums = ", nums); // [1,2,3,4,5]

function replaceEND(arr: number[], first: number, second: number): number[] {
    const newArr = arr.slice();// make a copy to keep original array as it is
    newArr.splice(0, 1, first);// replace  first and second element using splice
    newArr.splice(newArr.length - 1, 1, second);
    return newArr;
}
//Sample data
const arr = [1, 2, 3, 4, 5];

// Test cases
const resultt = replaceEND(arr, 0, 100);
console.log("Expect [0, 2, 3, 4, 100]:", resultt);

const result2 = replaceEND(arr, 100, 0);
console.log("Expect [100, 2, 3, 4, 0]:", result2);

console.log("Expect [1, 2, 3, 4, 5]:", arr); // Original array is unchanged




// higho
export function higho(func: (x: number) => number, arr: number[]): number[] {
    return arr.map(func);
}

// square
export function square(x: number): number {
    return x * x;
}

// absVal
export function absVal(x: number): number {
    return Math.abs(x);
}

// long question 
// a. defining the type of session and day
type Session = {
    userId: number;
    duration: number;
};
type Day = {
    sessions: Session[];
    date: string;
};
const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };
const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
const dailyRecord = [day1, day2];

// b. using for of loop to calculate the daily total duration each day
export function calculateDailyTotalDuration(sessions: Session[]): number {
    let totalDurationPerDay = 0;
    for (const session of sessions) {
        totalDurationPerDay += session.duration;
    }
    return totalDurationPerDay;
}

//c. calculating total duration using for of loop using previously calculating function.
export function calculateTotalDuration(dailyRecord: Day[]): number {
    let totalDuration = 0;
    for (const day of dailyRecord) {
        totalDuration += calculateDailyTotalDuration(day.sessions);
    }
    return totalDuration;
}

// d. use concat  method to print all the session
export function getAllSession(dailyRecord: Day[]): Session[] {
    let result: Session[] = [];
    for (const day of dailyRecord) {
        result = result.concat(day.sessions);
    }
    return result;
}
// const allSessions = [session1, session2, session3, session4, session5];
console.log(getAllSession(dailyRecord));

//e Use an appropriate array method in typescript to get all sessions for a given userid .
//  Hint:  use getAllSession.  using filter
export function getAllSessionsForUser(dailyRecord: Day[], userId: number): Session[] {
    //filter by id
    return getAllSession(dailyRecord).filter(session => session.userId === userId);

}
console.log(getAllSessionsForUser(dailyRecord, 2));


//e. Use an appropriate array method to get array of just duration times [60, 45, 30, 15 ,75] 
//Hint:  use getAllSessions.  
export function getAllDurations(dailyRecord: Day[]): number[] {
    return getAllSession(dailyRecord).map(session => session.duration);
}
console.log(getAllDurations(dailyRecord));

const array123 = [1, 2, 3]

//use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]
function multiply(arr: number[]): number[] {
    return arr.map(numb => numb * numb);

}
console.log(multiply(array123));


//Use reduce to get the sum of the elements of arr123.
function sum(arr: number[]): number {
    return arr.reduce((sum, current) => sum + current, 0);
}
console.log(sum(array123));



type Player = {
    name: string;
    points: number[];
};

//   function maxPoints(players: Player[]): number {
//     let maxPoints = -Infinity;

//     for (const player of players) {
//       const totalPoints = player.points.reduce((acc, curr) => acc + curr, 0);
//       maxPoints = Math.max(maxPoints, totalPoints);
//     }

//     return maxPoints;
//   }

//   const player1 = { name: "Bob", points: [1, 2, 1] };
//   const player2 = { name: "Andre", points: [2, 0, 1] };
//   const player3 = { name: "Max", points: [1, 1, 1] };
//   const players = [player1, player2, player3];

//   console.log("Expect 4:", maxPoints(players));

//   interface Player {
//     name: string;
//     points: number[];
//   }

function maxPoints(players: Player[]): number {
    if (players.length === 0) {
        return 0;
    }

    let maxPoints = players[0].points.reduce((sum, current) => sum + current, 0);

    for (let i = 1; i < players.length; i++) {
        const totalPoints = players[i].points.reduce((sum, current) => sum + current, 0);
        maxPoints = Math.max(maxPoints, totalPoints);
    }

    return maxPoints;
}

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("Expect 4:", maxPoints(players));

//Use reduce to find the sum of an array.
//Use reduce to find the largest element of an array.
let array = [2, 4, 5, 8, 10];
function calsum(array: number[]): number {
    return array.reduce((sum, current) => sum + current, 0);
}

// function max(array: number[]): number{
//     retrun arr.reduce(max, current)=> Math.max(max, current, 0)
// }

type Donation = {
    funderId: number;
    amount: number;
};

type DailyRecord = {
    donations: Donation[];
    date: string;
};

type FlattenedDonation = {
    date: string;
    id: number;
    amount: number;
};

function flatten(dailyRecord: DailyRecord[]): FlattenedDonation[] {
    return dailyRecord
        .map((day) =>
            day.donations.map((donation) => ({
                date: day.date,
                id: donation.funderId,
                amount: donation.amount,
            }))
        )
        .reduce((flattenedDonations, donations) => flattenedDonations.concat(donations), []);
}

const donation1: Donation = { funderId: 1, amount: 100 };
const donation2: Donation = { funderId: 2, amount: 10 };
const donation3: Donation = { funderId: 3, amount: 1 };
const donation4: Donation = { funderId: 2, amount: 5 };
const donation5: Donation = { funderId: 1, amount: 15 };

const day3: DailyRecord = { donations: [donation1, donation2], date: "01/10/2022" };
const day4: DailyRecord = { donations: [donation3, donation4, donation5], date: "01/11/2022" };

const dailyRecord1: DailyRecord[] = [day3, day4];

const flattenedDonations: FlattenedDonation[] = flatten(dailyRecord1);

console.log(flattenedDonations);


function myMap(arr: any[], fun: (value: any, index: number, array: any[]) => any): any[] {
    const mappedArray: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fun(arr[i], i, arr));
    }

    return mappedArray;
}

// Example usage:
const originalArray: number[] = [1, 2, 3, 4, 5];

// Define a function to double each element
const doubleFunction = (value: number) => value * 2;

// Use myMap with the custom function
const newArray: number[] = myMap(originalArray, doubleFunction);

console.log(newArray); // Output: [2, 4, 6, 8, 10]


/*
Write a function, smash, that uses map and destructuring in parameters of the callback function. Remember that you need () around destructuring brackets for an object if you do not have let or const.  smash input is an array of objects with x and y properties.  It returns an array that has the x and y values added together.

const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
console.log("expect [3, 14, 6]:", smash(bar));*/

type Integers = {
    x: number;
    y: number;
}

function smash(input: Integers[]): number[] {
    return input.map(({ x, y }: Integers) => x + y);// get the points and add them together using map
}


const bar: Integers[] = [{ x: 1, y: 2 }, { x: 10, y: 4 }, { x: 4, y: 2 }];
console.log("Expect [3, 14, 6]:", smash(bar));

//   let [firstName, surname] = "Ilya Kantor".split(' ‘);
function b() {
    function a() {
        console.log(x);
    }
    const x = 10;
    a();
}
const x = 20;
b();


function c() {
    function d() {
        console.log(x1);
    }
    const x1 = 10;
    d();
}
const x1 = 20;
c();