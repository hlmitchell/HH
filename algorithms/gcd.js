/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (isNaN(a) || isNaN(b)) return;
  let min = Math.min(a, b);
  let max = min === a ? b : a;
  if (max % min === 0) return min;

  for (let i = Math.ceil(min / 2); i > 1; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }

  return 1;
}

module.exports = gcd;