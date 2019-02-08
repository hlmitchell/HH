// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would 
// output 4—the number of ways to make 4¢ with those denominations:

// function coinsum(amount, denominations) {
//   total = 0;

//   function inner(currentAmount, index) {
//     if (currentAmount > amount) return;
//     if (currentAmount === amount) {
//       total += 1;
//       return;
//     }

//     for (let i = index; i >= 0; i--) {
//       inner(currentAmount + denominations[i], i);
//     }
//   }

//   inner(0, denominations.length - 1);
//   return total;
// }


// m * n time where n is amount of money and m is num of denominations
// Ultimately we are storing how many ways we can sum to each number less than "amount", just
// starting at 1, 2, 3... The trick is that we use these stored values to do less work
// how many ways can we sum to 4 with coins 1,2,3? 
// Well we can sum to 0 (don't worry about 0 it needs to be here) 1 2 3 4 with 1 cent in 1 way so [1 1 1 1 1]
// now let's add coin 2. we can't sum to 0 or 1 using coin 2 so those are the same 
// we can sum to 2 by adding the current sum of 2 to the sum of 2 - 2 which is (1 + 1) [1 1 2 1 1]
// we can sum to 3 by adding the current sum of 3 to the sum of 3 - 2 which is (1 + 1) [1 1 2 2 1]
// we can sum to 4 by adding the current sum of 4 to the sum of 4 - 2 which is (1 + 2) [1 1 2 2 3]
// and so on

function coinsum(amount, denominations) {

  // Initialize an array of zeros with indices up to amount
  const waysOfDoingNcents = new Array(amount + 1).fill(0);
  waysOfDoingNcents[0] = 1;

  denominations.forEach(coin => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  });

  return waysOfDoingNcents[amount];
}

console.log(coinsum(4, [1,2,3]));