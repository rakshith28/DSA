/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function getSubarrayBeauty(nums, k, x) {
  const n = nums.length;
  const freq = new Array(51).fill(0); // for negatives -50..-1 mapped to [0..50]
  const result = [];

  const add = (num) => {
    if (num < 0) {
      freq[-num]++;
    }
  };

  const remove = (num) => {
    if (num < 0) {
      freq[-num]--;
    }
  };

  const findXth = () => {
    let count = 0;
    for (let i = 50; i >= 1; i--) {
      count += freq[i];
      if (count >= x) {
        return -i;
      }
    }
    return 0;
  };

  // first window
  for (let i = 0; i < k; i++) {
    add(nums[i]);
  }
  result.push(findXth());

  // sliding window
  for (let i = k; i < n; i++) {
    add(nums[i]);
    remove(nums[i - k]);
    result.push(findXth());
  }

  return result;
}

