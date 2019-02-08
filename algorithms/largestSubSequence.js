// Given an array of integers. Find the largest increasing sub sequence of integers in the array.
// 10, 3, 7, 9, 0, 15
// return index 1&3

const sequence = [10,3,7,9,0,15];

function largestSubSequence(arr) {
  let start, end, potentialStart, potentialEnd, length, potentialLength;
  start = end = potentialStart = potentialEnd = length = potentialLength = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      potentialEnd = i;
      potentialLength += 1;
      potentialStart = potentialEnd - potentialLength;
    } else if (potentialLength > length) {
        start = potentialStart;
        end = potentialEnd;
        length = potentialLength;

        potentialStart = potentialEnd = potentialLength = 0;
    }
  }

  return [start, end];
}

console.log(largestSubSequence(sequence));