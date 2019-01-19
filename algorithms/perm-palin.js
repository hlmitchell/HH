/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  // we will keep track of how many times every letter appears
  count = {};

  // loop through the string to count the letters
  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) count[str[i]] = 1;
    else count[str[i]] += 1;
  }
  // if only a single letter (or none) has an odd number of occurences, it can be a palindrome
  return Object.values(count).filter(num => num % 2 === 1).length <= 1;
}

console.log(permPalin('abab'))// => true
console.log(permPalin('cbaba'))// => true
console.log(permPalin('cbac'))// => false
console.log(permPalin('a'))// => true

module.exports = permPalin;