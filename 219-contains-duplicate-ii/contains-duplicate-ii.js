/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i = 0; i < nums.length ; i++){
        if(map.has(nums[i])){
            const  prev = map.get(nums[i])
            if(i - prev <= k){
                return true
            } 
        }
        map.set(nums[i], i)
    }
    return false
};