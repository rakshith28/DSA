/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function getSubarrayBeauty(nums, k, x) {
  const n = nums.length;
  const window = new Map();
  const result = [];

  // helper: add number to map
  const add = (num) => {
    if (num < 0) {
      window.set(num, (window.get(num) || 0) + 1);
    }
  };

  // helper: remove number from map
  const remove = (num) => {
    if (num < 0) {
      window.set(num, window.get(num) - 1);
      if (window.get(num) === 0) window.delete(num);
    }
  };

  // helper: find x-th smallest negative
  const findXth = () => {
    let count = 0;
    // iterate negatives in ascending order
    const negatives = [...window.keys()].sort((a, b) => a - b);
    for (let num of negatives) {
      count += window.get(num);
      if (count >= x) return num;
    }
    return 0;
  };

  // initialize window
  for (let i = 0; i < k; i++) add(nums[i]);
  result.push(findXth());

  // slide window
  for (let i = k; i < n; i++) {
    add(nums[i]);
    remove(nums[i - k]);
    result.push(findXth());
  }

  return result;
}
