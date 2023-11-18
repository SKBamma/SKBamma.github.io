let a = 6;
let b = 7;
console.log(a + b);
// ...rest as an argunment
function multiplyEvens(...numbs) {
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
g = 500;
c = [42, 142];
// Using the concat method.
d = f.concat(g, c); // [1, 2, 3, 500, 42, 142]
console.log(d);
// Using the spread operator.
e = [...f, g, ...c]; // [1, 2, 3, 500, 42, 142]
console.log(e);
const copyOfF = [...f]; //[1, 2, 3]
console.log(copyOfF);
let str = "Hello John, my name is Pete";
console.log([...str]); // H,e,l,l,o
// Asignment
//Copy an array
export function copyArray(arr) {
    return [...arr];
}
//Concatenate arrays into a new array
export function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
// Use Math.min 
export function findMin(...nums) {
    return Math.min(...nums);
}
// use Math.max
export function findMax(...numbs) {
    return Math.max(...numbs);
}
//findProduct
export function findProduct1(...numns) {
    let product = 1;
    for (const num of numns) {
        product *= num;
    }
    return product;
}
//using reduce
export function findProduct(...nums) {
    return nums.reduce((product, num) => product * num, 1);
}
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
//finding the total player points
export function findTotalPlayerPoints(player) {
    return player.stats.reduce((sum, current) => sum + current.points, 0);
}
// finding the findTotalPointsByJersey
export function findTotalPointsByJersey(jersey) {
    const player = teamStats.find((p) => p.jersey === jersey);
    if (player) {
        return player.stats.reduce((sum, current) => sum + current.points, 0);
    }
    else {
        return 0;
    }
}
//findTotalScores
export function findTotalScores(teamStats) {
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
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 10);
//Delay verson
function printNumbers1(from, to) {
    console.log(`Starting in ${from} seconds`);
    setTimeout(() => {
        let current = from;
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
