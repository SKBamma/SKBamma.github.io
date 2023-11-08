//sum function
export function sumDigits(integers: string): number {
    let sum: number = 0;
    for (let i = 0; i < integers.length; i++) {
        sum += parseInt(integers.charAt(i));
    }
    return sum;
}
console.log("expect: 10", sumDigits("1234"));
console.log("expect: 3", sumDigits("102"));
console.log("expect: 8", sumDigits("8"));