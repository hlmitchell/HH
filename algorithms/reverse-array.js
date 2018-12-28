// Write a function that takes an array of characters and reverses the letters in place.

function reverseArray(arr, front = 0, back = arr.length - 1) {
  if (!Array.isArray(arr)) return arr;

  // let front = 0;
  // let back = arr.length - 1;
  let temp;

  while (front < back) {
    temp = arr[front];
    arr[front] = arr[back];
    arr[back] = temp;
    
    front += 1;
    back -= 1;
  }

  return arr;
}

// console.log(reverseArray([1,2,3,4,5]));

module.exports = reverseArray;