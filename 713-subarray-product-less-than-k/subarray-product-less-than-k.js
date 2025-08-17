/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1){
        return 0
    } 
    let j = 0;
    let count = 0;
    let product = 1;
    for(let i = 0; i < nums.length; i++){
       product = product*nums[i]
       while(product >= k && j <= i){
        product  /= nums[j];
        j++
       }
     count += i - j + 1  
    }
    return count
};