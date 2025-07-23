/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    if(s.length === 0){
       return true
    }
    while(j < t.length ){
      if(s[i] === t[j]){
         i++
      }
      j++                                                      
    }
      return i === s.length && i !== 0
};
