

var removeDuplicates = function(nums) {
  let uniqueCursor = 1;
  for(let i = 1;  i < nums.length; i++){
    if(nums[i] !== nums[i - 1]){
       nums[uniqueCursor] = nums[i];
       uniqueCursor++  
    }
  }
  return uniqueCursor
};
