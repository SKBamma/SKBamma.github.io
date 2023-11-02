//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
//Precedence of AND && is higher than OR ||
//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

import promptSync from "prompt-sync";
const prompt = promptSync ();
//1. What is the code below going to output?
console.log(null || 2 || undefined);//The answer is 2, that’s the first truthy value.

//2. What will the code below output?
console.log(console.log(1) || 2 || console.log(3));
/*
1. The first OR || evaluates its left operand alert(1). That shows the first message with 1.
2. The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
3. The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3)*/

//3. What is this code going to show?
console.log(1 && null && 2); //The answer: null, because it’s the first falsy value from the list.

//4. What will this code show?
console.log(console.log(1) && console.log(2));//The answer: 1, and then undefined. && evaluates the left operand (outputs 1), and immediately stops,
// because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

//5. What will the result be? result of or and or
console.log( null || 2 && 3 || 4 );
/*
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes: null || 3 || 4
Now the result is the first truthy value: 3.*/


//6. check the range between
//Write an if condition to check that age is between 14 and 90 inclusively. “Inclusively” means that age can reach the edges 14 or 90.
//  if (age >= 14 && age <= 90);


//7. check the range between
/* Which of these alerts are going to execute? What will the results of the expressions be inside if(...)?*/
//  if (-1 || 0) alert( 'first' );//
//  if (-1 && 0) alert( 'second' );
//  if (null || -1 && 1) alert( 'third' );//
/*// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );*/

// 8. check the login
/* Write the code which asks for a login with prompt.If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows: If it equals “TheMaster”, then show “Welcome!”,Another string – show “Wrong password”, For an empty string or cancelled input, show “Canceled”
*/
const userName = prompt("who is there?");
if(userName === "Admin"){
    let password = prompt("password please:");
    if( password === "TheMaster"){
        console.log("Welcome!")
    }else if (password === "" || password ==null){
            console.log("Cancelled")
    } else{
        console.log("wrong Password");
    }
}else if( userName === "" || userName === null){
    console.log("cancelled");
}else{
    console.log("I don't know you");
}

