// Writing programming interview questions hasn't made me rich yet ... so I might give up and start 
// trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made 
// from one purchase and one sale of one share of Apple stock yesterday.

// No "shorting"—you need to buy before you can sell. 
// Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

function getMaxProfit(prices) {
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = stockPrices[i];
    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 1, 2];

console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)