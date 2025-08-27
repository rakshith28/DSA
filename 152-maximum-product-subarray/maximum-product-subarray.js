/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let pre = 1;
    let suf = 1;
    let n = nums.length;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        if (pre === 0) {
            pre = 1
        }
        if (suf === 0) {
            suf = 1
        }
        pre *= nums[i]
        suf *= nums[n - i - 1];
        max = Math.max(max, Math.max(pre, suf))
    }
    return max;
};



