/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1; r = Math.max(...piles);
    while(l <= r){
     let mid =  Math.floor((l + r) / 2)
     let minHours =  minBanCount(piles, mid)
     if(minHours <= h){
        r = mid - 1;
     }else{
        l = mid + 1;  
    }
    }
   return l
};

const minBanCount = (piles, mid) => {
    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
        sum += Math.ceil(piles[i] / mid);
    }
    return sum;
}
