/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */


var shortestToChar = function(s, c) {
   const distanceArray = []
    for(let i = 0; i < s.length; i++){
       distanceArray.push(findDistance(s, i, c))              
    }
  return distanceArray
};

const findDistance = (s, i, c) => {
  if(s[i] === c){
   return 0
}
let j = 1
while(j>= 0 || j <= s.length){
   if(s[i - j] === c || s[i + j] === c){
       return j
   }
  j++
}
 
}

