// Elimination Game
// Difficulty:Medium

// There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

// Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

// We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

// Find the last number that remains starting with a list of length n.

// Input:
// n = 9,
// 1 2 3 4 5 6 7 8 9
// 2 4 6 8
// 2 6
// 6

// Output:
// 6

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    // garbage solution
    if (n <= 2) return n;
    if (n === 3) return 2;
    
    const tracker = {};
    // true means right, false means left
    let direction = false;
    
    // add all evens to tracker object because odd session will guarantee happen
    for (let i = 2; i <= n; i += 2) {
        tracker[i] = true;
    }
    
    let length = Object.keys(tracker).length;
    let max = n % 2 === 0 ? n : n - 1;
    let min = 2;
    let gap = 4;
    let oneTimeCheck = true;
    
    while (length > 1) {
        if (direction) {
            for (let i = min; i <= max; i += gap) {
                delete tracker[i];
            }
            min = min + (gap / 2);
        } else {
            for (let i = max; i >= min; i -= gap) {
                delete tracker[i];
            }
            max = max - (gap / 2);
            if (oneTimeCheck && Object.keys(tracker).length % 2 === 1) {
                oneTimeCheck = false;
                min = min + (gap / 2);
            }
        }
        
        direction = !direction;
        gap += gap;
        length = Math.floor(length / 2);
    }
    
    return Object.keys(tracker)[0];


  // tried to solve using math.... didn't quite figure it out before timer went off
  // if (n <= 2) return n;
  
  // const space = Math.ceil(Math.log2(n)); // 5
  // // true moving right, false moving left
  // const direction = space % 2 === 1; // true
  
  // const distance = Math.exp(2, space); // 16
  
  // // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 (1)
  // // 2 4 6 8 10 12 14 16 18 20 22 24 (2)
  // // 2 6 10 14 18 22 (4)
  // // 6 14 22 (8)
  // // 14 (16)

  // return ??
};