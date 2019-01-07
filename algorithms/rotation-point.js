// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. 
// I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the 
// end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the 
// alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically 
// ordered array that has been "rotated." For example:

// Write a function for finding the index of the "rotation point," which is where I started working from the beginning 
// of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

function findRotationPoint(words) {
  const firstWord = words[0];
  let start = 0;
  let end = words.length - 1;
  let middle;

  while (start < end) {
    // find middle index
    middle = Math.floor((start + end) / 2);

    // If words at middle index comes after first word or is the first word
    if (words[middle] >= firstWord) start = middle + 1; // move right
    else {
      // check if this number if the point of rotation (middle - 1 checks if the array was given in order from the beginning)
      if (middle - 1 < 0 || words[middle - 1] > firstWord) return words[middle];
      end = middle - 1; // move left
    }
  }
  return words[end];
}


// const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

const nums = [4,5,1,2,3];
const nums2 = [9,1,2,3,4,5,6,7,8];
const nums3 = [4,5,6,7,8,7,9,2];

console.log(findRotationPoint(nums));
console.log(findRotationPoint(nums2));
console.log(findRotationPoint(nums3));