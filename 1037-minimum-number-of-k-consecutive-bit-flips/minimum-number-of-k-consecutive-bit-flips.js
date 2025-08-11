/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let dQueue = []
    let flip = 0
    for(let i = 0; i < nums.length; i++){
        if(dQueue?.length && dQueue[0] < i ){
            dQueue.shift();
        }
        if(dQueue?.length % 2 === nums[i]){
            if(i+ k - 1 >= nums.length){
                return -1
            }
            dQueue.push(i+ k - 1);
            flip++
        }

    }
    return flip
};




