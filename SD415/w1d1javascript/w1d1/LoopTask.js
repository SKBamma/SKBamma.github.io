// 1. What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  console.log( i-- );// 3 2 1
}

import PromptSync from "prompt-sync";
const prompt = PromptSync();


//how do i know i have to break the looping mechanism here in previous code since it never says when to stop?
// In the previous code, the while loop will continue to execute as long as the condition i is truthy. In JavaScript, any non-zero number is considered truthy, so the loop will execute as long as i is greater than 0.

// 2. For every loop iteration, write down which value it outputs and then compare it with the solution.
//The prefix form ++i:
let j = 0;
while (++j < 5) {
    console.log( j ); //  1 2 3 4
}
//example 2 The postfix form i++
let k = 0;
while (k++ < 5) {
    console.log( k );//  1 2 3 4 5 the value i = 5 is the last one, because on the next step while(5 < 5) is false
}

//3. or each loop write down which values it is going to show. Then compare with the answer.
//The postfix form:
for (let l = 0; l < 5; l++){
    console.log( l );//0 1 2 3 4
} 
//The prefix form:
for (let m = 0; m < 5; ++m) {
    console.log( m );//0 1 2 3 4  The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
}

// 5. Use the for loop to output even numbers from 2 to 10.
for(let n = 2; n<=10; n++){
    if(n%2 === 0){
        console.log(n);
    }
}

//6 Reolace for with while
for (let o = 0; o < 3; o++) {
    console.log( `number ${o}!` );
  }
  //Using while loop
  let p = 0;
  while(p<3){
    console.log("Number ", p , '!');
    p++;
  }
  // 7. Repeate until the input is correct
  /*
  Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
  The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
  Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
  */
  let num = Number(prompt("Please enter the number greater than 100:"));
   while(num<=100 && num!= null){
    num = Number(prompt("Please enter the number greater than 100:"));
   }
   console.log(" You have entered ", num);

//7. check prime number