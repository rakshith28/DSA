/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const calSubArray = (nums, k) => {
    if(k < 0){
        return 0
    }
    let l = 0; r =0; count =0; sum = 0;
    while(r < nums.length){
        sum +=  nums[r]%2;
        while(sum > k){
            sum = sum - nums[l]%2;
            l++
        }
        count = count + (r -l + 1);
        r++
    }
    return count
  } 
  return calSubArray(nums, k) - calSubArray(nums, k - 1)
};
