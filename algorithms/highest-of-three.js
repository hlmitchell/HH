// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.


function highestOfThree(integers) {
  let nums = integers.slice(0, 3);
  
  for (let i = 1; i < integers.length; i++) {
    nums.sort();
    if (integers[i] > nums[0]) nums[0] = integers[i];
  }

  return nums;
}

const integers = [8,2,6,5,7,3];
console.log(highestOfThree(integers));
