import promptSync from "prompt-sync";
const  prompt = promptSync ();
let name = prompt("What is your name?")
console.log("Hi ", name);
let x = prompt("what is your age:");
console.log("age is ", x);