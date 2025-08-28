/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxValue = -Infinity;
    let prefix = 0;
    for(let i = 0; i < nums.length; i++){
        prefix += nums[i];
        maxValue = Math.max(maxValue, prefix)
        if(prefix < 0){
            prefix = 0;
        } 
       
    }
    return maxValue
};