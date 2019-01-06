// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.


function highestOfThree(integers) {
  integers.sort();
  const potentialSum1 = integers[integers.length - 1] * integers[integers.length - 2] * integers[integers.length - 3];
  const potentialSum2 = integers[0] * integers[1] * integers[integers.length - 1];
  return Math.max(potentialSum1, potentialSum2);

  // could solve in O(n) time if sort is ommited and a lot more lines of code are added
}

const integers = [8,2,6,5,7,3,-10,-10];
const integers2 = [8,2,6,5,7,3];
console.log(highestOfThree(integers));
console.log(highestOfThree(integers2));
