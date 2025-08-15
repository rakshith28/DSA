/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
     let seen = {}
     let res = []
      let i = 0
    while(i+10 <= s.length){
       let subString = s.slice(i, i+10)
       seen[subString] = seen[subString] ? seen[subString]+1 : 1
       if(seen[subString] === 2){
       res.push(subString)
      }
       i++
}
return res
};
