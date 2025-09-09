/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * n; i++) {
        let num = nums[i % n];
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            let index = stack.pop();
            res[index] = num;
        }
        if (i < n) stack.push(i); 
    }

    return res;
};