/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums[0] !== nums[1] || nums.length === 1){
        return nums[0]
    }
    if(nums[nums.length - 1] !== nums[nums.length - 2]){
         return nums[nums.length - 1] 
    }
   let l = 1 
   let h = nums.length - 2
   while(l <= h){
    let mid = Math.floor((l+h)/2)
    if(nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]){
        return nums[mid]
    }
    if((mid % 2 === 1 && nums[mid] === nums[mid - 1])
     || 
     (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ){
        l = mid + 1
    }else{
        h = mid -1 
    }
   }
   return -1 
};
