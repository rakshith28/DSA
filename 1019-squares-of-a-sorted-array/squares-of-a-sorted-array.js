
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
      let iSquare = nums[i] * nums[i];
      let jSquare = nums[j] * nums[j];
      console.log(iSquare, jSquare)
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
