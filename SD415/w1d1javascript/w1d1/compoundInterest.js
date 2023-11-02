// importing prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

 //get the user input
 let balance = parseFloat(prompt("what is the initial balance:"));
 const ANNUAL_INTEREST_RATE= parseFloat(prompt("what is the annual interest rate:"));
 const NUMBER_OF_YEAR = Number(prompt("Enter the number of year:"));
 
 //converting annual interest rete to monthly interest rate
 let monthlyInterestRate = ANNUAL_INTEREST_RATE/12;

// make the function to calculate the saving
function calSaving(){ 
    //looping to calculate the balance
    for(let i =1; i<=NUMBER_OF_YEAR*12; i++){
        let monthlyInterest = balance*monthlyInterestRate;
        balance += monthlyInterest;
    }
    return balance;
}

console.log(calSaving());


