/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   const data = []

  const backTrack = (start, curr, total) => {
    if(total === target){
      data.push([...curr])
      return;
    }
    if(total > target) return
    for(let i = start; i < candidates.length; i++){
       curr.push(candidates[i])
       backTrack(i, curr, total + candidates[i])
       curr.pop()
   }
  }
  backTrack(0, [], 0)
  return data
};


