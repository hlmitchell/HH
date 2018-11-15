// you will be given an array of keys that are unique
// ['hi', 'bye' 'sup']
// you will also be given an array of many words that contain the key words too
// ['taco', 'hi', 'sup', 'bye', 'hi', 'taco']
// we want to find all occurances in the above array in which
// all the key words are present in a row, in any order
// return an array that contains the indices of the start of every
// instance

// const keys = ['hi', 'bye' 'sup']
// const words = ['taco', 'hi', 'sup', 'bye', 'hi', 'taco']
// console.log(findWordsInARow(keys, words)); // [1,2]

// SOLVE IN O(n) TIME

function findWordsInARow(keys, words) {
  const result = []
  // find total of ascii values from all keys added together
  const totalOfKeys = keys.reduce((acc, next) => {
    return next.split('').reduce((subAcc, subNext) => {
      return subAcc + subNext.charCodeAt();
    }, 0)
  }, 0)

  const mappedAsciiVals = [];
  
}

const keys = ['hi', 'bye', 'sup'];
const words = ['taco', 'hi', 'sup', 'bye', 'hi', 'taco'];
console.log(findWordsInARow(keys, words)); // [1,2]