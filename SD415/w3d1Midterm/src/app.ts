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
export function replaceEnds(arr: number[], firstElem: number, secondElem: number,
    thirdElem: number, fourthElem: number): number[] {
    const newArr = arr.slice(); // Create a copy of the original array to keep it unchanged
    newArr.splice(0, 2, firstElem, secondElem); // Replace the first two elements
    newArr.splice(-2, 2, thirdElem, fourthElem); // Replace the last two elements
    return newArr;
}


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
export function calculateDailyTotalDuration(sessions: Session[]):number{
    let totalDurationPerDay = 0;
    for(const session of sessions){
        totalDurationPerDay += session.duration;
    }
    return totalDurationPerDay;
}

//c. calculating total duration using for of loop using previously calculating function.
export function calculateTotalDuration(dailyRecord: Day[]): number{
    let totalDuration = 0;
    for(const day of dailyRecord) {
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
export function getAllSessionsForUser(dailyRecord: Day[], userId:number):Session[]{
    //filter by id
    return getAllSession(dailyRecord).filter(session => session.userId===userId);

}
console.log(getAllSessionsForUser(dailyRecord, 2));


//e. Use an appropriate array method to get array of just duration times [60, 45, 30, 15 ,75] 
//Hint:  use getAllSessions.  
export function getAllDurations(dailyRecord:Day[]): number[]{
    return getAllSession(dailyRecord).map(session =>session.duration);
}
console.log(getAllDurations(dailyRecord));