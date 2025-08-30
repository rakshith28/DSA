/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let max = 0;
    let freq = new Map(); 
    while (j < nums.length) {
        sum += nums[j];
        freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
        if (j - i + 1 > k) {
            sum -= nums[i];
            freq.set(nums[i], freq.get(nums[i]) - 1);
            if (freq.get(nums[i]) === 0) {
                freq.delete(nums[i]);
            }
            i++;
        }
        if (j - i + 1 === k) {
            if (freq.size === k) { 
                max = Math.max(max, sum);
            }
        }

        j++;
    }

    return max;
};


