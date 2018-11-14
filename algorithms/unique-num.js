/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function uniqueNumber(array) {
  if (!Array.isArray(array) || array.length === 0) return;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}

console.log(uniqueNumber([1,2,1,3,3])); // -> 2

module.exports = uniqueNumber;
