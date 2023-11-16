// we have an array with the name and surname
let arr = ["John", "Smith"];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName); // John
console.log(surname); // Smith
//
let [firstName1, surname1] = "John Smith".split(' ');
console.log(firstName1); // John
console.log(surname1); // Smith
//task
//1. destructuring assignment
let user = {
    name: "John",
    years: 30
};
/*
Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)*/
//let {name, years:age, isAdmin:false} = user;
//2. Maximal Salary
let salaries = {
    "john": 100,
    "Pete": 300,
    "Mary": 250
};
export function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log("expect Pete", topSalary(salaries));
export const classrooms = [
    {
        roomNumber: 101,
        capacity: 30,
        students: [
            { name: "Alice", age: 18 },
            { name: "Bob", age: 19 },
            { name: "Charlie", age: 17 },
        ],
    },
    {
        roomNumber: 102,
        capacity: 25,
        students: [
            { name: "David", age: 20 },
            { name: "Eve", age: 18 },
        ],
    },
    {
        roomNumber: 103,
        capacity: 35,
        students: [
            { name: "Frank", age: 19 },
            { name: "Grace", age: 20 },
            { name: "Helen", age: 17 },
        ],
    },
];
//1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
export function collectRoomNumbers(classrooms) {
    return classrooms.map((classrom) => classrom.roomNumber);
}
console.log("expect 101, 102, 103", collectRoomNumbers(classrooms));
//2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
//string format:  [“101::30”, :102::25”, “103::35”].
export function collectRoomsAndCapacities(classrooms) {
    return classrooms.map((classrom) => classrom.roomNumber + "::" + classrom.capacity);
}
console.log(collectRoomsAndCapacities(classrooms));
//3.Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
//format [{roomNumber: 101, capacity: 30} , …  ]
export function collectLabeledRoomCaps(classrooms) {
    return classrooms.map((classrom) => ({ roomNumber: classrom.roomNumber, capacity: classrom.capacity }));
}
console.log(collectLabeledRoomCaps(classrooms));
//4.Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
//roomNumber as parameters and returns the number of students in the specified classroom.
export function countStudentsInClassroom(classrooms, roomNumber) {
    const classroom = classrooms.find((classrom) => classrom.roomNumber === roomNumber);
    if (classroom) {
        return classroom.students.length;
    }
    else {
        return null;
    }
}
console.log("expect 3", countStudentsInClassroom(classrooms, 101));
console.log("expect 2", countStudentsInClassroom(classrooms, 102));
console.log("expect 3", countStudentsInClassroom(classrooms, 103));
// 5.Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
//minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
export function findClassroomsWithCapacity(classrooms, minCapacity) {
    return classrooms.filter((classrom) => classrom.capacity >= minCapacity);
}
const minCapacity = 25;
console.log(findClassroomsWithCapacity(classrooms, minCapacity));
//6.Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum age as parameters and
// returns an array of student objects who are older than the specified age, along with the name of their classroom
export function findStudentsOlderThan(classrooms, minAge) {
    const result = [];
    classrooms.forEach((classroom) => {
        classroom.students.forEach((student) => {
            if (student.age > minAge) {
                result.push({ student, classroomName: `Room ${classroom.roomNumber}` });
            }
        });
    });
    return result;
}
console.log(findStudentsOlderThan(classrooms, 15));
/*.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
the average age of students across all classrooms.
*/
export function averageStudentAge(classrooms) {
    const totalStudents = classrooms.reduce((total, classroom) => total + classroom.students.length, 0);
    if (totalStudents === 0) {
        return null; // Avoid division by zero
    }
    const totalAge = classrooms.reduce((total, classroom) => {
        return total + classroom.students.reduce((studentTotal, student) => studentTotal + student.age, 0);
    }, 0);
    return totalAge / totalStudents;
}
