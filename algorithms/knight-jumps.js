// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

/*
Observe this grid showing all the answers. There are two observations:
1. The symmetry. (8 8) is the same as (1 1), (2 7) is the same as (2 2), etc. There is symmetry is both x and y axes.
  We can therefore map everything to only the first quadrant. We'll right a "reflect" function to do that.
2. There is an island of 8's in the middle. The distance from this island determines the number of moves to deduct from 8.
  We can calculate this distance and pass it through a function "distanceToValue" that determines the appropriate number of moves
  to deduct based on the distance.
  
2 3 4 4 4 4 3 2
3 4 6 6 6 6 4 3
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
3 4 6 6 6 6 4 3
2 3 4 4 4 4 3 2
*/

function knightjumps(str) {
  var x = reflect(+str[1]); // yet another way to parse integers, then reflect the coordinate
  var y = reflect(+str[3]);
  var x_distance = Math.max(3 - x, 0);
  var y_distance = Math.max(3 - y, 0);
  return 8 - distanceToValue(x_distance + y_distance);
}
function distanceToValue(d) { return d < 2 ? 2 * d : d + 2; }
function reflect(n) { return n > 4 ? 9 - n : n; }

// function knightjumps(str) {
//   // edge cases
//   if (typeof str !== 'string' || str.length < 5 || str.length > 5) return 0;
//   const x = parseInt(str[1]);
//   if (isNaN(x) || x < 1 || x > 8) return 0;
//   const y = parseInt(str[3]);
//   if (isNaN(y) || y < 1 || y > 8) return 0;

//   let count = 0;
//   // left and right movement
//   if (x + 2 <= 8) {
//     if (y + 1 <= 8) count += 1;
//     if (y - 1 > 0) count += 1;
//   }
//   if (x - 2 > 0) {
//     if (y + 1 <= 8) count += 1;
//     if (y - 1 > 0) count += 1;
//   }

//   // upward and downward movement
//   if (y + 2 <= 8) {
//     if (x + 1 <= 8) count += 1;
//     if (x - 1 > 0) count += 1;
//   }
//   if (y - 2 > 0) {
//     if (x + 1 <= 8) count += 1;
//     if (x - 1 > 0) count += 1;
//   }

//   return count;
// }

module.exports = knightjumps;