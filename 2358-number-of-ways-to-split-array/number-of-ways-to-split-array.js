/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) 
{
    let count = 0;
    let total = nums.reduce((a,b) => a + b, 0)
    let prefixSum = 0;
    for(let i = 0; i < nums.length - 1; i++){
        prefixSum += nums[i];
       let leftCheck = total - prefixSum;
       if(prefixSum >= leftCheck){
        count++
       }          
    }
    return count
};