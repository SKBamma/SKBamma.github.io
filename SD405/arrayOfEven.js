
let nums = [4, 20, 40, 5, 83];
function finEvenNum(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arr.push(nums[i]);
        }
    }
    return arr;
}
console.log(finEvenNum(nums));
