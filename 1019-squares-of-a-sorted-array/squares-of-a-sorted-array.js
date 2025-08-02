

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
     let i = 0;
     let j = nums.length - 1
     let pos = nums.length - 1
     let newArr = new Array(nums.length);
     while( i <= j){
      const iSquare = nums[i] * nums[i];
      const jSquare = nums[j] * nums[j];
      if(iSquare >= jSquare){
         newArr[pos] = iSquare
         i++
      }else{
         newArr[pos] = jSquare
         j--
      }
      pos--
     }
     return newArr
};
