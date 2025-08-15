/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
 let buyPrice = Infinity;
 let currentProfit = 0;
 for(let i = 0; i < prices.length; i++ ){
    if(prices[i] < buyPrice){
     buyPrice = prices[i]
    }
    const profit = prices[i] - buyPrice
   if(profit > currentProfit) {
     currentProfit = profit
    }
 }
   return currentProfit
};


