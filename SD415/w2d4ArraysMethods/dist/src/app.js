//QUIZ
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];
function sumPoints(players) {
    let totalP = 0;
    for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < players[i].points.length; j++) {
            totalP += players[i].points[j];
        }
    }
    return totalP;
}
console.log("expect 10: ", sumPoints(players));
//filter range
/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values
higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
function filterRange(arr, lNum, hNum) {
    return arr.filter(item => lNum <= item && item <= hNum);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log("except [ 3, 1 ]", filtered);
console.log("Expect [ 5, 3, 8, 1 ]", arr);
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
function filterRangeInPlace(arr, lowerN, higherN) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowerN || arr[i] > higherN) {
            arr.splice(i, 1);
            i--; // index --
        }
    }
}
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 0, 7);
console.log("expect [ 5, 3, 1 ]", arr1);
// sort in decreasing
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
console.log(arr3);
// Map to names
/*
You have an array of user objects, each one has user.name. Write the code that
converts it into an array of names.
*/
let john = { name: "john", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
console.log(john.age);
// type User = {
//     name: string;
//     age: number;
// }
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name + ":" + users[i].age);
}
//answer
let names = users.map(item => item.name);
console.log("expect [ 'john', 'Pete', 'Mary' ]", names);
//map to object
/*
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName,
where fullName is generated from name and surname.
*/
let jon = { name: "John", surname: "Smith", id: 1 };
let pet = { name: "Pete", surname: "Hunt", id: 2 };
let mar = { name: "Mary", surname: "Key", id: 3 };
let users1 = [jon, pet, mar];
//answer
let users1Mapped = users1.map(users1 => ({
    fullName: `${users1.name} ${users1.surname}`, id: users1.id
}));
console.log("expect: 1", users1Mapped[0].id);
console.log("expect : john Smith", users1Mapped[0].fullName);
//Arrays Methods Practices
const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//map double numbers
export function doubleNumbers(arr) {
    return arr.map((num) => num * 2);
}
//People arrays
const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
];
export function doubleAge(arr) {
    return arr.map((person) => {
        return { name: person.name, age: person.age * 2 };
    });
}
console.log(doubleNumbers(numArray));
console.log(doubleAge(peopleArray));
// filter
// filter all even numbers
export function filterAllEvenNumber(arr) {
    return arr.filter((num) => num % 2 === 0);
}
console.log(filterAllEvenNumber(numArray));
//filter all age > 10
export function filterAgeGreaterThan10(arr) {
    return arr.filter((person) => person.age > 10);
}
console.log(filterAgeGreaterThan10(peopleArray));
export function findEvenNum(arr) {
    return arr.find((num) => num % 2 === 0);
}
export function findEvenAge(arr) {
    return arr.find((age) => age % 2 === 0);
}
export function includesEvenNum(arr) {
    for (const num of arr) {
        if (num % 2 === 0)
            return true;
    }
    return false;
}
export function includesEvenAge(arr) {
    for (const num of arr) {
        if (num % 2 === 0)
            return true;
    }
    return false;
}
//exam practice
