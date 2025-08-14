/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
   let map = new Map();
    for(let i = 0; i < t.length; i++){
    if(!map.has(t[i])){
      map.set(t[i], 1);
    }else{
      map.set(t[i], map.get(t[i])+ 1);
    }
    }
    let right = 0; left  = 0; len = Infinity; count = map.size; minWindowVal = ""
    
    while(right < s.length){
      let rLetter = s[right]
      if(map.has(rLetter)){
          map.set(rLetter, map.get(rLetter) - 1);
          if(map.get(rLetter) === 0){
              count --
        }
       }
      right ++
      while(count === 0){
       if(right - left < len){
           len = right - left
           minWindowVal = s.slice(left, right)
      }  
       let sLetter = s[left];
       if(map.has(sLetter)){
          map.set(sLetter, map.get(sLetter) + 1);
          if(map.get(sLetter) > 0){
              count ++
        }
       }
       left++
      }
    }
   return minWindowVal
};


