/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at the left and right pointers
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move the pointers towards the middle
    left++;
    right--;
  }
}