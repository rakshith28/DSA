/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0); // sum of all elements
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i; // found pivot index
        }
        leftSum += nums[i];
    }

    return -1; // if no pivot index exists
};