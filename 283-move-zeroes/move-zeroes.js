/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroElement  = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
        nums[nonZeroElement] = nums[i]
        nonZeroElement++
    }
  }
  for(let j = nonZeroElement; j < nums.length; j++){
    nums[j]  = 0;
  }
};





 //    */
// var moveZeroes = function(nums) {
//   let l = 0;
//   let r = 0;
//   let temp
//   while(l < nums.length && r < nums.length){
//     if(nums[l] !== 0 && l < r){
//         l++
//     }else{
//         temp = nums[l]
//         nums[l] = nums[r]
//         nums[r] = temp
//         r++
//     }
//   }
//   return nums
// };

