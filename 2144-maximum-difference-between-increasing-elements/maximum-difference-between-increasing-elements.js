/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let suffixMax = nums[nums.length - 1]
    let max = -Infinity
    for(let i = nums.length - 2; i >= 0; i--){
          let diff = suffixMax - nums[i]
          max = Math.max(diff, max)
          suffixMax = Math.max(nums[i], suffixMax)
    }  
   return max > 0 ? max : -1;
};
