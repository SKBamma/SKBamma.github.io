//QUIZ

/* write a function, sumPoints, to get the total points across all players */
type Player = {
  name: string,
  points: number[]
};

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

function sumPoints(players: Player[]): number {
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
function filterRange(arr: number[], lNum: number, hNum: number): number[] {
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
function filterRangeInPlace(arr: number[], lowerN: number, higherN: number): void {
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
export function doubleNumbers(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}
//People arrays

const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 }]

//- double age
type Person = {
  name: string;
  age: number;
}

export function doubleAge(arr: Person[]): Person[] {
  return arr.map((person) => {
    return { name: person.name, age: person.age * 2 };
  });
}
console.log(doubleNumbers(numArray));
console.log(doubleAge(peopleArray));


// filter
// filter all even numbers
export function filterAllEvenNumber(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterAllEvenNumber(numArray));

//filter all age > 10
export function filterAgeGreaterThan10(arr: { name: string, age: number }[]): { name: string, age: number }[] {
  return arr.filter((person) => person.age > 10);
}
console.log(filterAgeGreaterThan10(peopleArray));

export function findEvenNum(arr: number[]): number | undefined {
  return arr.find((num) => num % 2 === 0);
}

export function findEvenAge(arr: number[]): number | undefined {
  return arr.find((age) => age % 2 === 0);
}

export function includesEvenNum(arr: number[]): boolean {
  for (const num of arr) {
    if (num % 2 === 0) return true;
  }
  return false;
}

export function includesEvenAge(arr: number[]): boolean {
  for (const num of arr) {
    if (num % 2 === 0) return true;
  }
  return false;
}
//sorting
/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into 
camel-cased “myShortString”.That is: removes all dashes, each word after dash becomes uppercased
*/
export function camelize(str: string): string {
  return str.split('-').map((word, index) => index == 0 ?
    word : word[0].toUpperCase() + word.slice(1)).join('')
}
console.log( " expect:backgroundColor",camelize("background-color"));
console.log( "Expect: liststyleImage",camelize('list-style-image'));

// console.log(camelize("-webkit-transition") == 'WebkitTransition');

//sorting in decreasing order
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
let arR = ["HTML", "JavaScript", "CSS"];
export function copySorted(arR: string[]): string[]{
  return arR.slice().sort();
}
let sortedArr = copySorted(arR);
console.log(sortedArr);
console.log(arR);

// SORT USERS BY AGE
//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };
let arr2 = [ pete1, john1, mary1 ];

//making the function
export function sortByAge(arr2: { name:string, age: number}[] ):{ name:string, age: number}[]{
 return arr2.sort((a,b) => a.age -b.age);
}
console.log("expected [john1, mary1, pete1", sortByAge(arr2));

//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
 let arrNum = [1, 2, 3];
 export function shuffle(arr: number[]): number[]{
   return arr.sort(() => Math.random() - 0.5);
 }
 console.log(shuffle(arrNum));

 /*
 Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.*/
let ram = {name: "Ram", age:30}
let hari = {name: "Hari", age:40}
let krishna = {name: "Krishna", age:20}
let nameArr =[ram, hari, krishna];//average 30

//using reduce inside thge function because we need single value back
export function getAverageAge(newArr: {name: string, age: number} []): number{
  return newArr.reduce((acc, current) => acc + current.age, 0)/ newArr.length;
}
console.log("expected average is 30:", getAverageAge(nameArr));

//create a key object from the array
/*
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.*/

// let people = [
//   {id: 'kamal', name: "Kamal Smith", age: 20},
//   {id: 'rajan', name: "rajan Smith", age: 24},
//   {id: 'parm', name: "parm Peterson", age: 31},
// ];
// function groupById(array:{id:string, name: string, age: number}[]): { [key: string]:{id:string, name: string, age: number}[]}{
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }
