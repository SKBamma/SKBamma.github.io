let name = "john";
let admin = name;
console.log(admin);

//giving the right name
const planet = "Earth";
const visitor = "name of visitor";

//uppercase constant
const MY_BIRTHDAY = "2000-04-02";
const age = "23";
//printing values
console.log(planet);
console.log(MY_BIRTHDAY);
console.log(age);

// Mathmathical Opearations
// 1. Exponential
let a = 5;
let b = 3;
console.log(a ** b);//5*5*5

//2 .  substraction
let ab = '5';
let bc = "3";
console.log(ab - bc);//2

//2. division
let x = '6';
let y = "3";
console.log(x / y); //2

//2. addition
let x1 = '6';
let y1 = "3";
console.log(x1 + y1); //63

// unary+ : The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
// No effect on numbers
let tx = 1;
console.log(+tx); // 1

let ty = -2;
console.log(+ty); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+"");   // 0

//The binary plus would add them as strings:
let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", the binary plus concatenates strings 
//If we want to treat them as numbers, we need to convert and then sum them:
let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
console.log(+apples1 + +oranges1); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
//The operators ++ and -- can be placed either before or after a variable.
//When the operator goes after the variable, it is in “postfix form”: counter++.
//The “prefix form” is when the operator goes before the variable: ++counter.
let counter = 1;
let p = ++counter; // (*)
console.log(p); // 2

let counter1 = 1;
let f = counter++; // (*) changed ++counter to counter++
console.log(f); // 1

let counter2 = 0;
counter2++;
++counter2;
console.log("The sum ", counter2); // 2, the lines above did the same
//increment/ decrement among other operator
let counter3 = 1;
console.log(2 * ++counter3); // 4

//Task
//1. What are the final values of all variables abc, bcd, cde and def after the code below?
let abc = 1, bcd = 1;//2, 1
let cde = ++abc; // 2
let def = bcd++; // 1

//TYPE CONVERSION
// 2. What are results of these expressions?
"" + 1 + 0          // 10 The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
"" - 1 + 0         //-1  The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
true + false      //1 1+0
6 / "3"          // 2
"2" * "3"       //6
4 + 5 + "px"   //9px
"$" + 4 + 5   //$45
"4" - 2       //2
"4px" - 2    //NaN
"-9" + 5    //-95
"  -9  " - 5  //-14
null + 1     // 1 null becomes 0 after the numeric conversion.
undefined + 1 // 1 undefined becomes NaN after the numeric conversion.
" \t \n" - 2  // -2  the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

//Fixed tha addition
let numb1 = prompt("First number:");
let numb2 = prompt("Second number:");
console.log(Number(numb1 + numb2));
/*
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
 */
/*let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
*/

//STRING COMPARISON
/*
The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

*/
//Strict equality
//The same thing happens with an empty string:
alert( '' == false ); // true
//A strict equality operator === checks the equality without type conversion.
alert( 0 === false ); // false, because the types are different

//Comparison with null and undefined
//For a strict equality check ===
alert( null === undefined ); // false
//For a non-strict check ==
alert( null == undefined ); // true

//Let’s compare null with a zero:
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//The value undefined shouldn’t be compared to other values:
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

//COMPARISON
5 > 4 // true
"apple2" > "pineapple2" //false
"2" > "12" //true
undefined == null //true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

