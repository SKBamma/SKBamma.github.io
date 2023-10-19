let x = 5;
let y = 10;
function calSum() {
    let sum = (x + y);
    return sum;
}


console.log(calSum());
// check if string is palindrome palindrom
// let str = "Suresh";
let str = "lebel";

//make a function to make the given word in reverse
function revWord(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

//store the reversed string in a varible called reverseString
let reverseString = revWord(str);

//Check if palindrome.
function isPali(str) {
    if (str === reverseString) {
        console.log("True");
    } else {
        console.log("False");
    }
}
(isPali(str));