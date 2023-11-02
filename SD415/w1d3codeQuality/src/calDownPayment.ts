//Testing CalcDownpayment Function
export function calcDownpayment(costOfHouse: number): number {
    let downPayment: number = 0;
    if (costOfHouse >= 200000) {
        downPayment = 20000 + (0.1 * (costOfHouse - 200000));
    } else if (costOfHouse >= 100000) {
        downPayment = 7500 + (0.15 * (costOfHouse - 100000));
    } else if (costOfHouse >= 50000) {
        downPayment = 2500 + (0.1 * (costOfHouse - 50000));
    } else if (costOfHouse >= 0) {
        downPayment = 0.05 * costOfHouse;
    }
    return downPayment;
}
//testing the function
/*console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));*/