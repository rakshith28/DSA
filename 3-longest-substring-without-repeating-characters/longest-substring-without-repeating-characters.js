/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let r = 0;
   let l= 0;
   let maxCount = 0;
   let checkMap = new Map();
   while(r < s.length){
    while(checkMap.has(s[r])){
       checkMap.delete(s[l]);
       l++
    }
       let width = r - l + 1;
       checkMap.set(s[r])
       maxCount = Math.max(maxCount, width)
       r++
   }
   return maxCount
};
