/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length === 1){
      return s
  }
  let max = [0,1]
  for(let i = 0; i < s.length; i++){
     const odd = expandValue(i+1, i-1, s)
     const even  =  expandValue(i, i-1, s)
     const cmax = odd[1] - odd[0] > even[1] - even[0] ? odd : even 
     max = max[1] - max[0] > cmax[1] - cmax[0] ? max : cmax
  }
   return  s.slice(max[0], max[1])
};

const expandValue = (right, left, s) => {
  while(s[right] === s[left] && left >= 0 && right < s.length){
     right++
     left--
  }
  return [left + 1, right]
}