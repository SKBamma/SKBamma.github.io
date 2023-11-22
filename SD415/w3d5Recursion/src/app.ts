console.log(4 * 5);
//recursive case for power
export function pow(x: number, n: number): number {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3));

//calculate the saum of n
export function sumTo(n: number): number {
    if (n === 0) {
        return 0;
    } else {
        return n + sumTo(n - 1);
    }
}
console.log(sumTo(100));
//using for loop
function calSum(n: number): number {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(calSum(100));
//using formula
function sumOfN(n: number): number {
    return n * (n + 1) / 2;
}
console.log(sumOfN(100));

// function to calculate factorial
export function factorial(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
const value = factorial(5)
console.log(value);

//fibonacci Number
export function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(3));
console.log(fibonacci(7));
//  console.log(fibonacci(77));

function evenRecurse(num: number): void {
    if (num <= 0) { // Base case
        return;
    }
    if (num % 2 === 0) { // Check if the current number is even
        console.log(num);
    }
    evenRecurse(num - 2); // Recursively call
}
evenRecurse(7);



// Function to calculate the average points using a regular for..of loop
function averagePoints(players: { name: string; points: number[] }[]): number[] {
    const averages: number[] = [];

    for (const player of players) {
        const totalPoints = player.points.reduce((sum, point) => sum + point, 0);
        const average = totalPoints / player.points.length;
        averages.push(average);
    }

    return averages;
}

// Function to calculate the average points and return objects with player names
function averagePointsLabeled(players: { name: string; points: number[] }[]): { [key: string]: number }[] {
    return players.map((player) => {
        const totalPoints = player.points.reduce((sum, point) => sum + point, 0);
        const average = totalPoints / player.points.length;

        return { [player.name]: average };
    });
}

// Example usage
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("Expect [1.33, 1, 1]: ", averagePoints(players));
console.log("Expect [{Bob: 1.33}, {Andre: 1}, {Max: 1}]: ", averagePointsLabeled(players));

