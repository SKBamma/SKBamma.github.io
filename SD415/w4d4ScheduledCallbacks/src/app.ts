let a = 6;
let b = 7;
console.log(a + b);
// ...rest as an argunment
function multiplyEvens(...numbs: number[]): number {
    let product = 1;
    for (const num of numbs) {
        if (num % 2 === 0) {
            product *= num;
        }
    }
    return product;
}
console.log(multiplyEvens(1, 2, 3, 5, 7, 8, 5));

let f, g, c, d, e;
f = [1, 2, 3];
g = 500
c = [42, 142];
// Using the concat method.
d = f.concat(g, c); // [1, 2, 3, 500, 42, 142]
console.log(d);
// Using the spread operator.
e = [...f, g, ...c]; // [1, 2, 3, 500, 42, 142]
console.log(e);
const copyOfF = [...f] //[1, 2, 3]
console.log(copyOfF);
let str = "Hello John, my name is Pete";
console.log([...str]); // H,e,l,l,o

// Asignment
//Copy an array
export function copyArray(arr: any[]): any[] {
    return [...arr];
}

//Concatenate arrays into a new array
export function concat(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}
// Use Math.min 
export function findMin(...nums: number[]): number {
    return Math.min(...nums);
}
// use Math.max
export function findMax(...numbs: number[]): number {
    return Math.max(...numbs);
}

//findProduct
export function findProduct1(...numns: number[]): number {
    let product = 1;
    for (const num of numns) {
        product *= num;
    }
    return product;
}
//using reduce
export function findProduct(...nums: number[]): number {
    return nums.reduce((product, num) => product * num, 1);
}

//QUESTION3
type Player = {
    jersey: number;
    stats: Stats[];
}

type Stats = {
    game: number;
    points: number;
}

type JerseyPoints = {
    jersey: number;
    total: number;
}
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];

//finding the total player points
export function findTotalPlayerPoints(player: Player): number {
    return player.stats.reduce((sum, current) => sum + current.points, 0);
}
// finding the findTotalPointsByJersey
export function findTotalPointsByJersey(jersey: number): number {
    const player = teamStats.find((p) => p.jersey === jersey);
    if (player) {
        return player.stats.reduce((sum, current) => sum + current.points, 0);
    } else {
        return 0;
    }
}

//findTotalScores
export function findTotalScores(teamStats: Player[]): JerseyPoints[] {
    return teamStats.map((player) => {
        return {
            jersey: player.jersey,
            total: player.stats.reduce((total, stat) => total + stat.points, 0),
        };
    });
}

/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout.*/

function printNumbers(from: number, to: number): void {
    let current: number = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId)
        }
        current++
    }, 1000);
}
printNumbers(5, 10);

//Delay verson
function printNumbers1(from: number, to: number): void {
    console.log(`Starting in ${from} seconds`);
    setTimeout(() => {
        let current: number = from;
        let timerId = setInterval(() => {
            console.log(current);
            if (current === to) {
                clearInterval(timerId);
            }
            current++;
        }, 1000);
    }, from * 1000);


}
//console
printNumbers1(3, 5);

// let x = 1;

// function func() {

//   console.log("expect 2", x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }

// func();

let array = [1, 2, 3, 4, 5, 6, 7]
function inBetween(arr: number[], n1: number, n2: number): number[] {
    const newRnage = [];
    for (const num of arr) {
        if (num >= n1 && num <= n2) {
            newRnage.push(num)
        }
    }
    return newRnage;
}
console.log("expect 3, 4, 5, 6", inBetween(array, 3, 6));

function inBetweens(a: number, b: number) {
    return function (x: number) {
        return x >= a && x <= b;
    };
}
console.log(`expect 3, 4, 5, 6 ${array.filter(inBetweens(3, 6))} `);

function inArray(arr1: number[], arr2: number[]): number[] {
    const matchedArray = [];
    for (const num of arr2) {
        if (arr1.includes(num)) {
            matchedArray.push(num)
        }
    }
    return matchedArray;
}
console.log(inArray(array, [2, 7, 12]));

//USING CLOSURES
function findElements( arr: number[]) {
    return function(x: number ): boolean {
        return arr.includes(x)
    };
}
let array3 = [1, 2, 12]
console.log("expect 1, 2", array.filter(findElements(array3)));