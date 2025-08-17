/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let j = 0;
    let i = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] !== 0){
        count = Math.max(count, i - j + 1)
       }else{
         j = i + 1 
       }
    }
    return count
};