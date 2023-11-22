// console.log(4+5);
//practical review exercise
/*
Write your own version of map. Write a function, myMap that takes 2 arguments, an array and a function 
to apply to the array. It should return a new array of the same size with the function applied to each element 
of the input array. It should not change the input array.
*/
export function myOwnMap(arr: any[], callback: (value: any, index: number, arr: any[]) => any): any[] {
    const result: any[] = [];
    let index = 0;
    for (const value of arr) {
        result.push(callback(value, index++, arr));
    }
    return result;
}
//example
const originalArr = [1, 2, 3, 4, 5];

//make a function that double each element
function double(value: number): number {
    return value * 2;
}
// new arr
const newArr: number[] = myOwnMap(originalArr, double);
console.log(newArr);
console.log(originalArr);

/*
Write your own version of filter. Write a function, myFilter that takes 2 arguments, an array and a function
 to apply to the array. It should return a new array with the function applied to each element of 
 the input array. It should not change the input array. It should work like Array.filter. I.e., the 
 input function returns true or false for each element in the original array, 
 and the true elements are included in the returned array.
*/
export function myFilter(arr: any[], callback: (value: any, index: number, arr: any[]) => boolean): any[] {
    const result: any[] = [];
    let index = 0;
    for (const value of arr) {
        if (callback(value, index, arr)) {
            result.push(value);
        }
        index++
    }
    return result;
}

//example
const oriArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//function to filter evenNumber
const isEven = (value: number) => value % 2 === 0;
const filteredArr = myFilter(oriArr, isEven);
console.log(oriArr);
console.log(filteredArr);


//reduce
export function myReduce(arr: any, callback: (accumulator: any, currentValue: any,
    currentIndex: number, arr: any[]) => any, initialValue: any): any {
    let accumulator: any = initialValue;
    let index = 0;
    for (const value of arr) {
        accumulator = callback(accumulator, value, index++, arr);
    }
    return accumulator;
}
//example
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//define reduce to sum the numbers
const sumReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
const sum: number = myReduce(numbers, sumReducer, 0);
console.log("Expect 55: ", sum);
console.log("expect [1, 2,3, 4, 5, 6, 7,8, 9,10]: ", numbers)

// /* Write a program to compute student grades and the average score for the class.  Your program should have 
// a quiz object that will contain properties of “students” and “key”.  The “students” property will be an array 
// of student objects of the following form:
// student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }

// It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that
//  records the students answers for the quiz.  The array holds objects that have a question id (“qid”) property 
//  that uniquely identifies the question, and an “ans” property that holds the student’s answer.

// The ”key” property of the quiz will hold an array with objects that give the correct answers.  

// Create an object named quiz with the following methods
// •	getAverage(), computes the average score over all students, 
// •	scoreStudent(sid), computes the quiz score for this student

// The answer arrays might not have the questions in the same order.  Write a function, answerComparator, 
// that you can use to sort the answer arrays by the quiz id, “qid”.   You may assume that there will be
//  answer objects for every question so that once they are sorted they arrays will have the student answers 
//  and the corresponding key answer in the same position of each array.  Score 1 point for each answer that 
//  matches the key.
// */

// export const quiz: { students: { sid: number; answers: { qid: number; ans: string }[] }[]; key: { qid: number; ans: string }[] } = {
//     students: [
//       { sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
//       { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
//       { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }
//     ],
//     key: [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }]
//   };

//   /**
//    * Comparator function for sorting answer objects based on question id ("qid").
//    * @param ans1 Answer object
//    * @param ans2 Answer object
//    * @returns Difference of the identifiers
//    */
//   function answerComparator(ans1: { qid: number }, ans2: { qid: number }): number {
//     return ans1.qid - ans2.qid;
//   }

//   /**
//    * Computes the quiz score for a specific student.
//    * @param sid Student id
//    * @returns Score for the student
//    */
//   quiz.scoreStudent = function (sid: number): number {
//     const student = quiz.students.find((s: { sid: number }) => s.sid === sid);

//     if (student) {
//       const sortedStudentAnswers: { qid: number; ans: string }[] = [...student.answers].sort(answerComparator);
//       const sortedKey: { qid: number; ans: string }[] = [...quiz.key].sort(answerComparator);

//       let score = 0;

//       for (const [index, studentAnswer] of sortedStudentAnswers.entries()) {
//         if (studentAnswer.ans === sortedKey[index].ans) {
//           score++;
//         }
//       }

//       return score;
//     } else {
//       return -1; // Student not found
//     }
//   };

//   /**
//    * Computes the average score over all students.
//    * @returns Average score for the class
//    */
//   quiz.getAverage = function (): number {
//     let totalScore = 0;
//     let totalStudents = 0;

//     for (const student of quiz.students) {
//       const score = quiz.scoreStudent(student.sid);
//       if (score !== -1) {
//         totalScore += score;
//         totalStudents++;
//       }
//     }

//     return totalStudents > 0 ? totalScore / totalStudents : 0;
//   };

/*
please use for of loop: * write a function, maxPoints, to find and return the maximum points of any single player.
const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
console.log("expect 4:", maxPoints(players));*/
type Player = {
    name: string;
    points: number[];
};

function maxPoints(players: Player[]): number {
    if (players.length === 0) {
        return 0;
    }

    let maxPoints = players[0].points.reduce((sum, current) => sum + current, 0);

    for (const player of players.slice(1)) {
        const totalPoints = player.points.reduce((sum, current) => sum + current, 0);
        maxPoints = Math.max(maxPoints, totalPoints);
    }

    return maxPoints;
}

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("Expect 4:", maxPoints(players));

/*
Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for alldonations.
fl
atten(dailyRecord) returns: [
{ date: '01/10/2022', id: 1, amount: 100 },
{ date: '01/10/2022', id: 2, amount: 10 },
{ date: '01/11/2022', id: 3, amount: 1 },
{ date: '01/11/2022', id: 2, amount: 5 },
{ date: '01/11/2022', id: 1, amount: 15 }
]
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };
const dailyRecord = [day1, day2]; */

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
    const flattenedDonations: FlattenedDonation[] = [];

    for (const day of dailyRecord) {
        const { date, donations } = day;

        for (const { funderId, amount } of donations) {
            flattenedDonations.push({ date, id: funderId, amount });
        }
    }

    return flattenedDonations;
}

// Example usage
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022" };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022" };
const dailyRecord = [day1, day2];

const flattenedDonations = flatten(dailyRecord);
console.log(flattenedDonations);

// let phrase = "Hello";
// if (true) {
//     let user = "John";
//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }
// sayHi(); //what will this show? Note scope of sayHi error

setTimeout(sayHi, 3000);
function sayHi() {
    console.log('hello');
}

