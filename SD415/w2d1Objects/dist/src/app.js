//FUNCTION EXPRESSION W1D5
//Write a function, double, that takes a number and returns 2 times the number. 
export function double(numbs) {
    let result = 2 * numbs;
    return result;
}
console.log("expected answer is 10: ", double(5));
//2. Write a function times100 that takes a number and returns 100 times the number.
export function times100(numbrs) {
    let result = 100 * numbrs;
    return result;
}
console.log("expected answer is 500: ", times100(5));
/* 3.	Write a function, myMap, that takes an array and a function and returns a new array that
 has the function applied to each element of the input array. */
export function myMap(arr, func) {
    const newArr = [];
    for (const number of arr) {
        newArr.push(func(number));
    }
    return newArr;
}
//OBJECT W2D1
let user = {
    name: "John",
    age: 30
};
console.log(user.name);
console.log(user.age);
/*
 -They store properties (key-value pairs), where:
- Property keys must be strings or symbols (usually strings).
 -Values can be of any type.
 -the dot notation: obj.property.
 -Square brackets notation obj["property"].
  Square brackets allow taking the key from a variable, like obj[varWithKey].
 -
*/
/*
Write a function,
-myCallback( func: (num: number)=>number , arg: number): void. myCallback will call func with the given arg and then log the return value to the console.
-Test myCallback by calling it with a function that takes a number and returns the cube of the argument.
-First write it as "cube" a normal named function declaration, then as an anonymous function expression.
-Also test with a function that returns the cube if the arg is an even number, else the square.
myCallback(cube, 10) → 100
➢
myCallback(cubeSquare, 10) → 100
➢
myCallback(cubeSquare, 9) → 81
*/
export function cube(num) {
    return num * num * num;
}
export function myCallback(func, arg) {
    console.log(func(arg));
}
export function cubeSquare(num) {
    if (num % 2 === 0) {
        return num * num * num;
    }
    else {
        return num * num;
    }
}
console.log("expected 1000", myCallback(cube, 10));
console.log("expected 25", myCallback(cubeSquare, 5));
const somePerson = {
    name: "John",
    age: 25
};
function greet(person) {
    return "Hello " + person.name + " your age is " + person.age;
}
console.log(greet(somePerson));
// creating a aobject student1, student2, and student3
const student1 = {
    studentId: 101,
    quizAnswer: [1, 1, 2, 4],
};
const student2 = {
    studentId: 102,
    quizAnswer: [2, 1, 2, 2]
};
const student3 = {
    studentId: 103,
    quizAnswer: [3, 1, 2, 4]
};
/* the src/quiz.ts file, complete the function, quizAnswers that computes and returns the score for a
single student. assert.deepEqual(gradeStudent(student1.quizAnswers, [3, 1, 2, 4]), 3);*/
function computeStudentScore(stu, quizKey) {
    // get the student answer
    const answer = stu.quizAnswer;
    //loop through the parallel arrays and count the matches and return that
    let numCorrect = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === quizKey[i]) {
            numCorrect++;
        }
    }
    return numCorrect;
}
//console
console.log("expect 3", computeStudentScore(student1, [3, 1, 2, 4]));
console.log("expect 2", computeStudentScore(student2, [3, 1, 2, 4]));
console.log("expect 4", computeStudentScore(student3, [3, 1, 2, 4]));
/* 2.2 Complete the function, gradeQuiz, that takes the quiz array and an array
of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.
assert.deepEqual(gradeQuiz(quizAnswers, [3, 1, 2, 4]), [3, 2, 3]);*/
function computeStudentScore1(stu, quizKey) {
    // get the student answer
    const answer = stu.quizAnswer;
    //loop through the parallel arrays and count the matches and return that
    let newArray = [];
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === quizKey[i]) {
            newArray.push(answer[i]);
        }
    }
    return newArray;
}
//console
console.log("expected [1, 2, 4]", computeStudentScore1(student1, [3, 1, 2, 4]));
console.log("expected [1, 2,]", computeStudentScore1(student2, [3, 1, 2, 4]));
console.log("expected [3, 1, 2, 4]", computeStudentScore1(student3, [3, 1, 2, 4]));
// console.log("expected [3, 1, 2, 4]", computeStudentScore1(student3, [3, 1, 2, 4]));
