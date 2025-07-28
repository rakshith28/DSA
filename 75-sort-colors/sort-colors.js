/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0
    let j = 0
    let k = nums.length  -1
    while( j <= k){
     if(nums[j] === 0){
        swap(nums, i, j)
         i++;
         j++;
     }
    else if(nums[j] === 1){
         j++;
     }
    else if(nums[j] === 2){
        swap(nums, j, k)
        k--;
     }
    }
    return nums
};



const swap  = (array, val1, val2) => {
let temp = array[val1]
array[val1] = array[val2]
array[val2] = temp
}