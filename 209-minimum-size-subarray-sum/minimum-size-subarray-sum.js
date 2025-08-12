/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let end = 0;
    let start = 0;
    let sum = 0
    let total = Infinity;
    while(end < nums.length){
        sum = sum + nums[end]
       while(sum >= target){
             total =  Math.min(total, end - start + 1)
             sum = sum - nums[start]
             start++
       }
       end++
    }
    return total === Infinity ? 0 : total;
};



