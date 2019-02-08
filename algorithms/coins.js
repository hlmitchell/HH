// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would 
// output 4—the number of ways to make 4¢ with those denominations:

function coinsum(amount, denominations) {
  total = 0;

  function inner(currentAmount, index) {
    if (currentAmount > amount) return;
    if (currentAmount === amount) {
      total += 1;
      return;
    }

    for (let i = index; i >= 0; i--) {
      inner(currentAmount + denominations[i], i);
    }
  }

  inner(0, denominations.length - 1);
  return total;
}

console.log(coinsum(4, [1,2,3]));