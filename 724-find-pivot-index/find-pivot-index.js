/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let left = 0
   const sum  = nums.reduce((a, b) => a + b, 0)
   for(let i = 0; i < nums.length; i++){
     const total = sum - nums[i] - left
     if(total === left){
       return i
      }
     left += nums[i]  
   }  
   return -1  
};