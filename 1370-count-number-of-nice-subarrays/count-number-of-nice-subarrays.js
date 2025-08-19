/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const atMost = (k) => {
        let l = 0, res = 0, odds = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] % 2 === 1) odds++;
            while (odds > k) {
                if (nums[l] % 2 === 1) odds--;
                l++;
            }
            res += r - l + 1;
        }
        return res;
    };
    return atMost(k) - atMost(k - 1);
};
