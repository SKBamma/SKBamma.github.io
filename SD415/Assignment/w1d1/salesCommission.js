/*
1. Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales from $300 and up to but less than $500
• 2% for sales $500 or above
• If the salesman is not salaried then
• 2% for sales from $300 and up to but less than $500
• 3% for sales $500 or above
*/
// import the prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// get the user input
const Salaried = prompt("Is the salesman salaried?");
const isSalaried = Salaried.toLocaleLowerCase() === 'yes';
const sales = parseFloat(prompt("enter the sales amount:"));

// make a function to calculate the commision based on isSalaried and sales
function calCommission(isSalaried, sales) {
    let commission = 0;
    if (isSalaried) {
        if (sales >= 500) {
            commission = sales * 0.02;
        } else if (sales >= 300) {
            commission = sales * 0.01;
        }
    } else {
        if (sales >= 500) {
            commission = sales * 0.03;
        } else if (sales >= 300) {
            commission = sales * 0.02
        }
    }
    return commission;
}

const totalCommission = calCommission(isSalaried, sales);
console.log("The total commission earned: ", totalCommission);
