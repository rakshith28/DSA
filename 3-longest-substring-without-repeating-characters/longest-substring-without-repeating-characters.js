/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let j = 0; 
   let results = 0
   let check = new Map()
   for(let i = 0; i < s.length; i++){
       while(check.has(s[i])){
        check.delete(s[j])
        j++
       }
       let width = i - j + 1
       check.set(s[i])
       results = Math.max(results, width)
   }
   return results
};


