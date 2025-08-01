/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    
    // Step 1: Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        // Step 2: Find the next larger element to the right
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the subarray to the right of `i`
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
};
