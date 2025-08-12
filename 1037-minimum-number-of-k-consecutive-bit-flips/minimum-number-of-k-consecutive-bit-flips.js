/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let flip = 0;
    let deq = []
    let n = nums.length
    for(let i = 0; i < n; i++){
        if(i > deq[0] && deq.length){
            deq.shift()
        }
        if( deq.length % 2 === nums[i]){
            if(i+k-1>=n){
                return -1
            }
           deq.push(i+k-1)
           flip++
        }
    }
    return flip 
};