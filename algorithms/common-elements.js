// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(...args){
  // keeps track of number of times every element appears
  const count = {};

  // place all input arrays into one array
  // const allArrays = [array1, array2, array3, array4];
  const allArrays = [...args];
  
  // iterate through all arrays
  allArrays.forEach((subArray, i) => {
    // iterate through individual input arrays
    subArray.forEach(element => {
      // when the index is 0, we want to add all elements to the object
      // For any greater index there's no need
      if (i === 0 && !count[element]) count[element] = 1;
      // we make the following check to ensure that each array can only add 1 additional count
      else if (count[element] === i) count[element] += 1;
    })
  })

  // return an array of elements whose count is equivalent to the num of input arrays
  return Object.keys(count).filter(key => count[key] >= args.length);
}

var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];

console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;