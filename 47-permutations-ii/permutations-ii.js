/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let ans = [];
  nums.sort((a, b) => a - b); // ✅ sort to group duplicates together

  const backTrack = (index, nums) => {
    if (index === nums.length) {
      ans.push([...nums]); // ✅ shallow copy
      return;
    }

    let used = new Set(); // ✅ track used numbers at this recursion level
    for (let i = index; i < nums.length; i++) {
      if (used.has(nums[i])) continue; // ✅ skip duplicate choices
      used.add(nums[i]);

      swap(index, i, nums);
      backTrack(index + 1, nums);
      swap(index, i, nums); // backtrack
    }
  };

  backTrack(0, nums);
  return ans;
};

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};
