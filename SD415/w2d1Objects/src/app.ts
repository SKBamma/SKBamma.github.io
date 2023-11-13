//FUNCTION EXPRESSION W1D5
//Write a function, double, that takes a number and returns 2 times the number. 
export function double(numbs: number): number {

    let result = 2 * numbs;
    return result;
}
console.log("expected answer is 10: ", double(5));

//2. Write a function times100 that takes a number and returns 100 times the number.
export function times100(numbrs: number): number {

    let result = 100 * numbrs;
    return result;
}
console.log("expected answer is 500: ", times100(5));

/* 3.	Write a function, myMap, that takes an array and a function and returns a new array that
 has the function applied to each element of the input array. */

export function myMap(arr: number[], func: (num:number)=> number): number[]{
    const newArr:number[] = [];
    for(const number of arr){
        newArr.push(func(number));
    }
    return newArr;
}



//OBJECT W2D1
let user = {
    name: "John",
    age: 30
}
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

export function cube(num: number): number {
    return num * num * num;
}
export function myCallback(func: (num: number) => number, arg: number): void {
    console.log(func(arg));
}

export function cubeSquare(num: number): number {
    if (num % 2 === 0) {
        return num * num * num;
    } else {
        return num * num;
    }

}
console.log("expected 1000", myCallback(cube, 10));
console.log("expected 25", myCallback(cubeSquare, 5));





//when object type cannot be inferred or is not obvious, declare property types using "type" declaration
export type Person = {
    name: string;
    age: number;
}
const somePerson: Person = {
    name: "John",
    age: 25
};
function greet(person: Person) {
    return "Hello " + somePerson.name + " your age is " + somePerson.age;
}
console.log(greet(somePerson));

//for of loop
// let user1 = {
//     name: "Ram", 
//     age: 30,
//     isAdmin: true
// };

// for(let key of user1){
//     console.log(key);// name, age, isAdmin
//     console.log( user1[key] )
// }

/*
 We have an object storing salaries of our team
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for(let key in salaries){
    sum += salaries[key];
  }
console.log(sum);//390
*/





//Exercise slide page 13
/*
Create 3 objects, student1, student2, student3
-property studentId : 101, 102, 103 respectively
-property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
-push the students into an array, quizAnswers
-write a function to compute the score for a given student
-computeStudentScore(student1, [3, 1, 2, 4]) should return 3
-second argument is array of correct answers
*/
// Object type declaration
export type Student = {
    studentId: number,
    quizAnswer: number[]

}
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
const quizArray = [student1, student2, student3];

/*  complete the function, quizAnswers that computes and returns the score for a 
single student. assert.deepEqual(gradeStudent(student1.quizAnswers, [3, 1, 2, 4]), 3);*/
export function computeStudentScore(stu: Student, quizKey: number[]): number {
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
assert.deepEqual(gradeQuiz(quizAnswers, [3, 1, 2, 4]), [3, 2, 4]);*/

export function computeStudentScore1(stu: Student, quizKey: number[]): number[] {
    // get the student answer
    const answer = stu.quizAnswer;
    //loop through the parallel arrays and count the matches and return that
    let newArray:number[] = [];
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

/*  
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
 expect   [ 3, 2, 3 ]
 use a helper function to compute the score for a given student
*/
export function gradeQuiz(quizArr: Student[], quizKey: number[]): number[] {
    /* loop through the students and call the helper to get their score, and push into result */
    const quizScores: number[] = [];
    for (const student of quizArr) {
        quizScores.push(computeStudentScore(student, quizKey));
        //const stuScore = computeStudentScore(student, quizKey);
        // quizScores.push(stuScore);
    }

    return quizScores;

}
console.log("Expect [3, 2, 4] : ", gradeQuiz(quizArray, [3, 1, 2, 4]));
/*
Complete the function, gradeQuizLabeled, that is like gradeQuiz except that it returns objects for each student with properties of studentId and score
assert.deepEqual(gradeQuizLabeled(studentQuizzes, [3, 1, 2, 4]), [
{ id: 101, score: 3 },
{ id: 102, score: 2 },
{ id: 103, score: 3 }]);
*/

export function gradeQuizLabeled(quizArr:Student[], quizKey: number[]): {id: number, score:number}[]{
    const labeledScores :{ id:number, score: number}[] = [];
    for(const student of quizArr){
        const score = computeStudentScore(student, quizKey);
        labeledScores.push({ id:student.studentId, score });
    }
    return labeledScores;
}
//console.log
console.log("Expect [ { id: 101, score: 3 }, { id: 102, score: 2 }, { id: 103, score: 3 } ]: ", gradeQuizLabeled(quizArray, [3, 1, 2, 4]));
 