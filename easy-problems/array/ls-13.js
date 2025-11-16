// Easy =>  Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
// => [7, 1, 5, 3, 6, 4]
var maxProfit = function (prices) {
  if (prices.length == 0) {
    return 0;
  }

  if (prices.length < 2) {
    return 0;
  }

  let min = prices[0];
  let maxprofit = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxprofit = Math.max(maxprofit, prices[i] - min);
  }

  return maxprofit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
console.log(maxProfit([]));
