//making the function
 export function compoundInterest(balance: number, annualIR: number, numOfYear: number): number {

    for (let i = 1; i < numOfYear * 12; i++) {
        let monthlyInterest = (balance * annualIR / 100) / 12;
        balance += monthlyInterest;
    }
    return balance;

}
console.log("expect 110.47", compoundInterest(100, 10, 1).toFixed(2));
console.log("expect 16470.09", compoundInterest(10000, 5, 10).toFixed(2));