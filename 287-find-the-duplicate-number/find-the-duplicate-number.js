/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    let largest = 0
    let val 
    for(let i = 0; i < nums.length; i++){
       obj[nums[i]] = obj[nums[i]] + 1 || 0 
       if(obj[nums[i]] > largest){
        largest = obj[nums[i]]
         val = nums[i]
       }
    }
    return val
};