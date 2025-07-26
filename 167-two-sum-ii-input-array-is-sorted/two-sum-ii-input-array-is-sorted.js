/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
         const sum = numbers[i] + numbers[j]
         if(target === sum ){
            return [i+1, j+1]
         }else if(target > sum){
              i++
         }else{
            j -- 
         }
    }
};