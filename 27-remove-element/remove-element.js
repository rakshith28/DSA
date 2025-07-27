/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        if (nums[l] === val) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            r--; 
        } else {
            l++; 
        }
    }
    return l; 
}

