function makeCounter1(): (increment: number) => number {
    let count = 0;

    return function (increment: number): number {

        increment = increment || 1;
        count += increment;
        return count;
    };
}

const myCount = makeCounter1();

//console
console.log(myCount(5));
console.log(myCount(10));



//defining the type
type GameStats = {
    game: number;
    points: number;
};

type PlayerStats = {
    jersey: number;
    stats: GameStats[];
}
type HighScoreInfo = {
    jersey: number;
    high: number;
};
// making the function name findHighScores
function findHighScores(teamStats: PlayerStats[]): HighScoreInfo[] {
    return teamStats.map(player => { //using map to get points only
        const highScore = player.stats.reduce((maxPoints, game) => Math.max(maxPoints, game.points), 0); // using reduce to find max
        return { jersey: player.jersey, high: highScore }; // returning the jersey and max score
    });
}
// console.log("Expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: ", findHighScores(teamStats));

/* CLASS EXERCISE
Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc,
 which is an inner function; innerFunc will increment the count variable and return the incremented value. 
 makeCounter should return innerFunc. Call it twice to make different counters, counter1 and counter2
*/
function makeCounter(): () => number {
    let count = 0;
    function innerFunc(): number {
        count++;
        return count;
    }
    return innerFunc;
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());

function a() {
    const x = 20;
    console.log(x); // consult Global for x and print 20 from Global
}
function b() {
    const x = 10;
    a(); // consult Global for a
}

b();

function makeCounter2() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter2();
console.log(`expect 0 ${counter()}`); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter());
console.log(counter());


//
function makeWorker3() {
    let name1 = "Pete";
    return function () {
        console.log(name1);
    }
}
let name1 = "John";
let work = makeWorker3();
work();

// example 2
let name2 = "John";
function sayHi(): void {
    console.log("Hi, " + name2);
}
name2 = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
console.log(name2)

//example3
let phrase = "Hello";
if (true) {
    let user = "john";
    console.log(phrase, user);
}
//console.log(user) // can not found error

//does a function pick latest changes?
let name4 = "John";

function sayHi2() {
    console.log("Hi, " + name4);
}

name4 = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
//which variab;es are aviables
function makeWorker2() {
    let name4 = "Pete";

    return function () {
        console.log(name4);
    };
}

//   let name4 = "John";

// create a function
let work2 = makeWorker2();

// call it
work2(); // what will it show?// pete

//are counters independends
function makeCounter3() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter3 = makeCounter();
let counter4 = makeCounter();

console.log(counter3()); // 0
console.log(counter3()); // 1

console.log(counter4()); // ?
console.log(counter4()); // ?

//counter object
// function Counter() {
//     let count = 0;

//     this.up = function() {
//       return ++count;
//     };

//     this.down = function() {
//       return --count;
//     };
//   }

//   let counter = new Counter();

//   alert( counter.up() ); // 1
//   alert( counter.up() ); // 2
//   alert( counter.down() ); // 1

// sum with closures
function sum(a: number) {
    return function (b: number) {
        return a + b;
    };
}
console.log(sum(4)(5));
console.log(sum(12)(-15));
console.log(sum(40)(50));

//filter inBetween
export function inBetween(a: number, b: number) {
    return function (x: number) {
        return x >= a && x <= b;
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(2, 6)));

export function inArray(arr: number[]) {
    return function (x: number) {
        return arr.includes(x);
    };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1, 2, 10, 5])));

function byField(fieldName: string) {
    return (b: { [key: string]: any }, c: { [key: string]: any }) => b[fieldName] > c[fieldName] ? 1 : -1;
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField("age")));
console.log(users.sort(byField("name")));

// Army of function
export function makeArmy(): (() => number)[] {
    let shooters: (() => number)[] = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function (): number {
            return j;
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}
//shopping cart
export type CartItem = {
    name: string;
    price: number;
};

export function createShoppingCart() {
    const items: CartItem[] = [];

    function addItem(name: string, price: number): void {
        items.push({ name, price });
    }

    function removeItem(name: string): void {
        const index = items.findIndex(item => item.name === name);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function getTotal(): number {
        return items.reduce((total, item) => total + item.price, 0);
    }

    return {
        addItem,
        removeItem,
        getTotal
    };
}

//bank balance
type Transaction = {
    customerId: number;
    customerTransactions: number[];
  };
  
  type Bank = {
    bankBalance: () => number;
  };
  
   function makeBank(): Bank {
    const transactionsDB: Transaction[] = [
      { customerId: 1, customerTransactions: [10, 50, -40] },
      { customerId: 2, customerTransactions: [10, 10, -10] },
      { customerId: 3, customerTransactions: [5, -5, 55] }
    ];
  
    function getBalance(custId: number): number {
      const customer = transactionsDB.find(customer => customer.customerId === custId);
      if (!customer) {
        return 0; // or handle the case where customer is not found
      }
  
      let balance = 0;
      for (const trans of customer.customerTransactions) {
        balance += trans;
      }
  
      return balance;
    }
  
    function bankBalance(): number {
      let totalBalance = 0;
      for (const customer of transactionsDB) {
        totalBalance += getBalance(customer.customerId);
      }
      return totalBalance;
    }
  
    // Return the bank object with the public method
    return {
      bankBalance
    };
  }
  
  // Example usage:
  const bank = makeBank();
  console.log(bank.bankBalance()); // Should output 85
  
  export { makeBank }; // Export for testing purposes
  