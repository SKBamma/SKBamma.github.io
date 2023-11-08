// multiDigit Function
export function multDigit(nums) {
    let multiply = 1; // should be 0
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
