/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const obj = new Map()
   for(let i = 0; i < nums.length; i++){
    let comp = target - nums[i]
    if(obj.has(comp)){
        return [i, obj.get(comp)]
    }
    obj.set(nums[i], i)
   }
}


