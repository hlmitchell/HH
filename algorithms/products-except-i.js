// You have an array of integers, and for each index you want to find the product 
// of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of 
// integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// Here's the catch: You can't use division in your solution!

function getProductsOfAllIntsExceptAtIndex(arr) {
  const output = [];
  let zeros = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros += 1;
    if (zeros >= 2) return new Array(arr.length).fill(0);

    output.push(product);
    product *= arr[i];
  }

  product = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] *= product;
    product *= arr[i];
  }

  return output;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4, 0, 0]));