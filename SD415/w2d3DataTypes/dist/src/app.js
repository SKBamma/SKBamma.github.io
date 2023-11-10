const foo = 45;
const bar = "" + foo;
const bar2 = "" + 108;
const bar3 = foo.toString();
const bar4 = 108..toString(); //need both periods after number
const bar5 = foo + "";
console.log(typeof foo === "number"); //true
console.log(typeof bar === "string"); //true
console.log(typeof bar2 === "string"); //true
console.log(typeof bar3 === "string"); //true
console.log(typeof bar4 === "string"); //true
console.log(typeof bar5 === "string"); //true
console.log(0.666667.toFixed(4) == (2 / 3).toFixed(4)); // true?
console.log(0.6666666666666667 === 2 / 3); // true
/*
Use slice and trim to generate the following:
Slice is cool!
lice is cool!
ice is cool!
ce is cool!
e is cool!
is cool!
is cool!
s cool!
cool!
cool!
ool!
ol!
l!
!
*/
const str = "Slice is cool!";
function stringSlice(inputStr) {
    let temp = inputStr;
    let output = "";
    for (let i = 0; i < inputStr.length; i++) {
        output += temp + "\n";
        temp = temp.slice(1).trim();
    }
    console.log(output);
}
stringSlice(str);
/*
use forEach to log all the even elements of an array to the console
[1,5,16,3, 108]
*/
[1, 5, 16, 3, 108].forEach(function (numb) {
    if (numb % 2 === 0) {
        console.log(numb);
    }
});
//Assignment
export function ucFirst(str) {
    if (!str) {
        return str;
    }
    let newString = str[0].toUpperCase() + str.slice(1);
    return newString;
}
console.log(ucFirst("suresh"));
export function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes("viagra") || newStr.includes("xxx")) {
        return true;
    }
    return false;
}
console.log(checkSpam("innocent guy xxx"));
console.log(checkSpam("innocent guy"));
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    else if (str.length > maxlength) {
        return str.substring(0, maxlength - 1) + "...";
    }
    return str;
}
console.log(truncate("my name is john cena shdshd", 15));
export function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
export function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
    // capitalizes first letters of all array items except the first one
    // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
export function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue("$120"));
