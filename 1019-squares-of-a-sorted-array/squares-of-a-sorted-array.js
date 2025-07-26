/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let i = 0;
    let j = nums.length - 1
    let pos = nums.length - 1
    while(i <= j){
    const iSquare = nums[i] * nums[i];
    const jSquare = nums[j] * nums[j];
      if(iSquare > jSquare){
         result[pos] = iSquare
         i++
      }else{
       result[pos] = jSquare
       j--
      }
      pos--

 }
 return result
};
