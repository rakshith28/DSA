/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    let start = 0
    let end = 0
    let count = 0
   while (end < arr.length) {
     sum = sum + arr[end];
    if (end - start + 1 === k) {
        if(sum/k >= threshold ){
            count++
        }
        sum = sum - arr[start]
        start++;
    }
    end++;
}
return count
};