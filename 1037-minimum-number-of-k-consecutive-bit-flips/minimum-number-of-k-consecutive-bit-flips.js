/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    const dQueue = []
    let flip = 0
    const n = nums.length
    for(let i = 0; i < n; i++){
        if(dQueue?.length && dQueue[0] < i ){
            dQueue.shift();
        }
        if(dQueue?.length % 2 === nums[i]){
            if(i+ k - 1 >= n){
                return -1
            }
            dQueue.push(i+ k - 1);
            flip++
        }

    }
    return flip
};




