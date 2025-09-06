/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights);  ;
    let h = weights.reduce((a,b) => a +b, 0);
    while(l <= h){
      let mid = Math.floor((l + h) / 2);
       let numberOfDays = daysRequired(weights,mid);
       if(numberOfDays <= days){
            h = mid - 1;       
     }else{
            l = mid + 1;
       }
    }
   return l
};

const daysRequired = (weights, cap) => {
   let day = 1;
   let load  = 0;
   for(let i = 0; i < weights.length; i++){
          if(load + weights[i] > cap){
           day = day + 1;
           load = weights[i]
      }else{
         load += weights[i]
    }
    }
return day 
}


