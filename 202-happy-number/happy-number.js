/**
 * @param {nber} n
 * @return {boolean}
 */
var isHappy = function(n) {
const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
  }

  return n === 1;
};