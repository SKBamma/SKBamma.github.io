// function add(a: number, b: number): number {
//     return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add(4, 5);// wap put wrong parameter
// console.log("sum1 is: ", sum1, " sum2 is : ", sum2);

// make the function
// function findMin(a: number, b: number): number{
//     if(a > b){
//         return b;
//     }else(a < b)
//         return a;
// }
// console.log(findMin(4,5));
// with turnry operator
// function findMinim(a:number, b: number): number{
//     if(a < b ?  return a :  return b);
// }
// console.log(findMinim(2,3));

/*
Write a function, computeSalesCommission that takes a Boolean argument for salaried and number argument for 
salesAmount. It should return the sales commission based on following rules. First make a defining table for
 the function. If the salesman is salaried then
•These is no commission for sales below $300 •1% for sales between $300 and $500 (inclusive, and commission on
     the entire amount)
•2% for sales above $500 (only for the portion above 500 plus the 1% commission on the first 500)
•If the salesman is not salaried then •no commission for sales below $300
•2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the first 500)
*/

// getting inputs
function computeSalesCommission(isSalaried: boolean, sales: number): number {
    let commission: number = 0;
    if (isSalaried) {
        if (sales < 300) {
            commission = 0;

        } else if (sales <= 500) {
            commission = sales * 0.01;

        } else if (sales > 500) {
            commission = (0.01 * 500) + (sales - 500) * 0.02;

        }
    } else {
        if (sales < 300) {
            commission = 0;

        } else if (sales <= 500) {
            commission = sales * 0.02;

        } else if (sales > 500) {
            commission = (500 * 0.02) + (sales - 500) * 0.03;

        }
    }
    return commission;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

/*
Make a defining table and function that will return the balance of a savings account that compounds interest 
monthly. Parameters for the function will be:
• initial amount
•annual interest rate
•number of years to compound
Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will add 
the appropriate interest each month.

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));  */

// input 1. balance  2. annual interest rate 3. Number of year to be compounted
// expected output: balance of saving account.
/* steps: 1. get the input 2. convert the annual interest rate to monthly interest rate 3. use for loop
       4. calculate the interest 5. add the interest to the balance 6. return balance */


//making the function
function compoundInterest(balance: number, annualIR: number, numOfYear: number): number {

    for (let i = 1; i < numOfYear * 12; i++) {
        let monthlyInterest = (balance * annualIR / 100) / 12;
        balance += monthlyInterest;
    }
    return balance;

}
// console.log("expect 110.47", compoundInterest(100, 10, 1).toFixed(2));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10).toFixed(2));
 

/*
Cost of House Down Payment
Make a defining table and then write a function that calculates down payment for a home loan based on 
following rules. Your function should have a parameter for the cost and return the down payment amount.
Cost of House              Down Payment
$0 to less than 50K        5% of the cost
$50K to less than 100K     $2500 + 10% of (cost - $50K)
$100K to less than 200K    $7500 + 15% of (cost - $100K)
$200K and above            $20000 + 10% of (cost - $200K)
*/

// inputs :costs of house
// output: downpayment based on given condition
//steps: use multi-branching

function calcDownpayment(costOfHouse: number): number {
    let downPayment: number = 0;
    if (costOfHouse >= 200000) {
        downPayment = 20000 + (0.1 * (costOfHouse - 200000));
    } else if (costOfHouse >= 100000) {
        downPayment = 7500 + (0.15 * (costOfHouse - 100000));
    } else if (costOfHouse >= 50000) {
        downPayment = 2500 + (0.1 * (costOfHouse - 50000));
    } else if (costOfHouse >= 0) {
        downPayment = 0.05 * costOfHouse;
    }
    return downPayment;
}
//testing the function
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));


/*
Write functions sumDigits and multDigits that take an integer parameter and return the sum or product of the
digits in the number. Use the / and % operators to find the digits.

Input  sumDigits Output  multDigits Output
1234     10                  24
102       3                   0
8         8                   8
*/
//using character at and treating each numbers are string
//sum function
function sumDigits(integers: string): number {
    let sum: number = 0;
    for (let i = 0; i < integers.length; i++) {
        sum += parseInt(integers.charAt(i));
    }
    return sum;
}
console.log("expect: 10", sumDigits("1234"));
console.log("expect: 3", sumDigits("102"));
console.log("expect: 8", sumDigits("8"));

// multiDigit Function
function multDigit(nums: string): number {
    let multiply: number = 1;// should be 0
    for (let i = 0; i < nums.length; i++) {
        multiply *= parseInt(nums.charAt(i));
    }
    return multiply;
}
//testing the case
console.log("expect: 24", multDigit("1234"));
console.log("expect: 0", multDigit("102"));
console.log("expect: 8", multDigit("8"));
console.log("expect: 549755813888", multDigit("8888888"));

//using / and %
// sum function
function sumCalc(numbs: number): number {
    let sum = 0;
    while (numbs > 0) {
        sum += numbs % 10;// get the last digit and add to the sum
        numbs = Math.floor(numbs / 10); // remove the last digit
    }
    return sum;
}
console.log("expect: 10", sumCalc(1234));
console.log("expect: 3", sumCalc(102));
console.log("expect: 8", sumCalc(8));

// product function
// function calProd(numbrs : number): number{
//     let product = 1;
//     while(numbrs>0){
//         product *=numbrs%10;
//         product = Math.floor(product/10);
//     }
//     return product;
// }
//testing the case
// console.log("expect: 24", calProd(1234));
// console.log("expect: 0", calProd(102));
// console.log("expect: 8", calProd(8));
// console.log("expect: 549755813888", calProd(88888));

/*
Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit 
and returns the temperature in Celsius.

*/
function convertFahrenheit(temperature: number): number {
    let inC = (temperature - 32) * 5 / 9;
    return inC;
}
//testing the function
console.log("in celsius expect 0: ", convertFahrenheit(32));
console.log("in celsius expect -17.7778: ", convertFahrenheit(0));
console.log("in celsius expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

/*
Write a function that takes x and y co-ordinates of two points as inputs and 
returns the distance between these two points based on the formula, d = √√( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
*/
function calcDistance(x1: number, y1: number, x2: number, y2: number): number {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}
//testing
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5).toFixed(2));

/* print
11111
22222
33333
44444
55555 */
console.log("looping1");
for (let i = 1; i < 6; i++) {
    let str = " ";
    for (let j = 1; j < 6; j++) {
        str += i;
    }
    console.log(str);
}

/*
Write code to print the number patterns on the console
12345
12345
12345
12345
12345
*/
console.log("looping2");
for (let i = 1; i < 6; i++) {
    let str = "";
    for (let j = 1; j < 6; j++) {
        str += j;
    }
    console.log(str);
}

console.log("looping3");
/*
Write code to print the number patterns on the console
1 
22 
333
4444 
55555
*/
function printPattern3(rows: number): void {
    for (let i = 1; i < rows; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += i;
        }
        console.log(str);
    }
}
//testing
printPattern3(6);

console.log("looping4");
/*
Write code to print the number patterns on the console.
55555
4444 
333 
22 
1 */
function printPattern4(rows: number): void {
    for (let i = rows; i > 0; i--) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += i;
        }
        console.log(str);
    }
}
//testing
printPattern4(5);

console.log("Testing prime Numbers")
//Test the prime number
function testPrime(num:number):boolean{
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
//testing primes
console.log("true: ", testPrime(7));
console.log("false: ", testPrime(100));

console.log("Scope Example 1");
function a() {
    console.log(x); // consult Global for x and print 20 from Global
}
function b() {
    let x = 10;
    a(); // consult Global for a
    console.log(x);
}
let x = 20;
b();

console.log("Scope Example 2");
function c() {
    function d() {
        console.log(p);
    }
    let p = 10;
    d();
    console.log(p);
}
let p = 20;
c(); // 10

console.log("Scope Example 3");
function e() {
    function f() {
        console.log(g);
    }
    f();
    console.log(g);
}
let g = 20;
e(); // 20

console.log("Scope Example 5");
function h() {
    let a = 1, b = 20, c;
    console.log(a + " " + b + " " + c); // 1 20 undefined
    function g() {
        let b = 300, c = 4000;
        console.log(a + " " + b + " " + c); // 1 300 4000
        a = a + b + c;
        console.log(a + " " + b + " " + c); // 4301 300 4000
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined
    g();
    console.log(a + " " + b + " " + c); // 4301 20 undefined
}
h();

console.log("Scope Example 5");

// let x = 10;
// function main() {
//     let x = 0;
//     console.log("x1 is " + x);
//     x = 20;
//     console.log("x2 is " + x);
//     if (x > 0) {
//         x = 30;
//         console.log("x3 is " + x);
//     }
//     console.log("x4 is " + x);
//     function f(x) {
//         console.log("x5 is " + x);
//     }
//     f(50);
//     console.log("x6 is " + x);
// }
// main();
// console.log("x7 is " + x);
// //Draw the scope chain


function compoundInterest2(deposit: number, rate: number, years: number) {
    const monthlyRate = rate / 12 / 100;
    const numPayments = years * 12;
    let balance = deposit;
    for (let i = 1; i <= numPayments; i--) {
    balance = balance + balance * monthlyRate;
   debugger;
    }
    return balance;
   }
   console.log("expect 110.47", compoundInterest2(100, 10, 1));
   console.log("expect 16470.09", compoundInterest2(10000, 5, 10));