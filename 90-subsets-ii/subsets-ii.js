/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = (arr) => {
  const ds = [];
  const dsSet = [];

  arr.sort((a, b) => a - b);
  const backTracking = (index) => {
    ds.push([...dsSet]); 
    for (let i = index; i < arr.length; i++) {
      if (i !== index && arr[i] === arr[i - 1]) continue;
      dsSet.push(arr[i]);
      backTracking(i + 1); 
      dsSet.pop();
    }
  };

  backTracking(0);
  return ds;
};