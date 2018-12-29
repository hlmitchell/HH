/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((end + start) / 2);
    if (arr[middle] === target) return true;
    if (arr[middle] > target) end = middle - 1;
    else if (arr[middle] < target) start = middle + 1;
  }

  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 6)); // -> true
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false
console.log(findInOrderedSet(nums, 0)); // -> false
console.log(findInOrderedSet(nums, 47)); // -> false



module.exports = findInOrderedSet;