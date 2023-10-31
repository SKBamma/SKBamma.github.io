//Write a loop that continually prompts for age until you enter age older than 18 using while loop
// import the age
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// get the user input
let age = Number(prompt("enter the age:"));
while(age<=18){
    age = Number(prompt("enter the age:"));
}
console.log("your age is ", age)

//Write a loop that continually prompts for age until you enter age older than 18 using  do while loop
//get the input
let ages = Number(prompt("enter the age:"));
do{
    //do
    ages = Number(prompt("enter the age:"));
}while(ages<=18);// condition
   
//console
console.log("your age is :", ages)