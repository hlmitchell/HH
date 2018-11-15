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
    return acc + next.split('').reduce((subAcc, subNext) => {
      return subAcc + subNext.charCodeAt();
    }, 0)
  }, 0)

  let mappedAsciiVals = [];
  for (let i = 0; i < words.length; i++) {
    // first index, cannot add any ascii that came previously
    if (i === 0) mappedAsciiVals.push(words[i].split('').reduce((acc, next) => acc + next.charCodeAt(), 0));
    // add previous asciis to the current val
    else if (i <= keys.length) {
      const newAscii = words[i].split('').reduce((acc, next) => acc + next.charCodeAt(), 0);
      mappedAsciiVals.push(newAscii + mappedAsciiVals[i - 1]);
    } 
    // add previous ascii but not subtract the ascii the length of keys array away
    else {
      const newAscii = words[i].split('').reduce((acc, next) => acc + next.charCodeAt(), 0);
      mappedAsciiVals.push(newAscii + mappedAsciiVals[i - 1] - mappedAsciiVals[i - keys.length]);
    }
  }

  mappedAsciiVals = mappedAsciiVals.slice(keys.length - 1, mappedAsciiVals.length);
  return mappedAsciiVals;
}

const keys = ['hi', 'water', 'sup'];
const words = ['taco', 'hi', 'sup', 'water', 'hi', 'taco'];
console.log(findWordsInARow(keys, words)); // [1,2]