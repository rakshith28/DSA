/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
     let ds = []
     const backTrack = (u, c) => {
       if(c.length === nums.length){
        ds.push([...c]);
        return
       }
       for(let i = 0; i < nums.length; i++){
          if(!u[i]){
            u[i] = true;
            c.push(nums[i])
            backTrack(u,c);
            u[i] = false
            c.pop()
          }
       }

     }
    backTrack({}, [])
    return ds;
};