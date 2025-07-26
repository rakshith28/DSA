/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
let i = 0
let j = height.length - 1
let areaVal = 0
while(i < j){
    let calcVal = (j - i) * Math.min(height[i], height[j]);
    areaVal = Math.max(calcVal, areaVal)
   if(height[i] >= height[j]){
     j--
} else{
    i++
}
}
  return areaVal
};
