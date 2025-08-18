/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let r = 0;
    let l = 0;
    let maxResult  = 0;
    let bucket = new Map()
    while(r < fruits.length){

       bucket.set(fruits[r], (bucket.get(fruits[r]) || 0) + 1)
    
       while(bucket.size > 2)
       {
         bucket.set(fruits[l], bucket.get(fruits[l]) - 1)
         if(bucket.get(fruits[l]) === 0){
            bucket.delete(fruits[l])
         }
         l++;        
       }
           maxResult = Math.max(maxResult, r - l + 1)  
       r++
    }
    return maxResult
};

