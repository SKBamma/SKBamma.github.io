/*
•Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
•Now write a function named findAverage, that takes an array as an argument and return average of the array values.
•Call findAverage function passing array you created in step1 and save the return result in a variable, average.
•Print the average, it should be 30 for this example.
•Create a second array with values from 1 to 9 and find the average of the array values.
•Should compute correct average for an array of any size.
*/
const score: number[] = [10, 20, 30, 40, 50];
// find ave
function finAverage(score: number[]): number {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
        // console.log(sum);
    }
    average = (sum / score.length);
    // console.log(average);
    return average;
}
console.log('the average score1', finAverage(score));
// new array
const score2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('the average of score2 ', finAverage(score2));


// generating  10 random and storein array called scores 
const scores: number[] = [];
for (let i= 0; i < 10; i++){
    scores[i] = Math.ceil(Math.random()* 100);
}
console.log(scores);