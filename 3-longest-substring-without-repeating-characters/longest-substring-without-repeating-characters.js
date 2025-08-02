/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let result = 0
    let visited = new Map()
    for(let j = 0; j < s.length; j++ ){
        while(visited.has(s[j])){
            visited.delete(s[i])
            i++
        }
        let width = j - i + 1
        result = Math.max(result, width)
        visited.set(s[j])
    }
    return result
};