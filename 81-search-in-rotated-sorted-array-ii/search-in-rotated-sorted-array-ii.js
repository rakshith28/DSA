/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return true;
        }
        let checkRight = nums[mid] <= nums[r]
        let checkLeft = nums[l] <= nums[mid]
        if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
            l++;
            r--;
        }
        else if (checkRight) {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        else if(checkLeft)
      {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
    }
    return false
};
