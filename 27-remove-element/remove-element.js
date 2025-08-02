
var removeElement = function(nums, val) {
   let i = 0;
   let j = nums.length - 1
   while(i <= j){
      if(nums[i] === val){
         let temp = nums[i];
         nums[i] = nums[j];
         nums[j] = temp;
         j--
      }else{
           i++
      }
    
   }
   return i
}
