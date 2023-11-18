console.log(4*5);
//recursive case for power
export function pow(x: number, n:number ): number {
    if( n === 1) {
        return x;
    }else{
        return x * pow(x, n-1);
    }
}
console.log(pow(2,3));

//calculate the saum of n
export function sumTo(n: number): number {
      if( n ===0){
        return 0;
      }else{
        return n + sumTo(n-1);
      }
}
console.log(sumTo(100));
//using for loop
function calSum(n: number): number {
    let sum = 0;
    for(let i = 0; i<= n; i++){
        sum +=i;
    }
    return sum;
}
console.log(calSum(100));
//using formula
function sumOfN(n: number): number {
    return n * (n+1)/2;
}
console.log(sumOfN(100));

// function to calculate factorial
export function factorial(n: number): number {
    if( n ===1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
const value = factorial(5)
console.log(value);

//fibonacci Number
 export function fibonacci(n: number): number {
    if( n <= 1){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
 }
 console.log(fibonacci(3));
 console.log(fibonacci(7));
//  console.log(fibonacci(77));