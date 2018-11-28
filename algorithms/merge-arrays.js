/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
  if (arr2.length === 0) return arr1;
  if (arr1.length === 0) return arr2;
  
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr2[j] < arr1[i]) {
      merged.push(arr2[j]);
      j += 1;
    }
    else if (j >= arr2.length || arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    }
  }

  return merged;
}

const my_array = [3,4,6,10,11,15,21];
const another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;