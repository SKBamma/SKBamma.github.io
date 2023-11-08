let x = 5;
let y = {x};
console.log(y); // {x : 5}
function sum(arr: number[]): number[] { 
     return arr; 
}
const foo = {sum };
console.log(foo);
console.log(foo.sum);
console.log(foo.sum([1,2,3] ));
//test .........