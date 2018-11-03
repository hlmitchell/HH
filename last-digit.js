// Define a function that takes in two numbers a and b and returns the last decimal digit of a^b. 
// Note that a and b may be very large! For example, the last decimal digit of 9^7 is 9, 
// since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 
// decimal digits, is 6. The inputs to your function will always be non-negative integers.

var lastDigit = function(str1, str2){  
  // for powers of 0, just return 1
  if (str2 === '0' || str2 === 0) return 1;

  // convert strings to numbers and handle edge cases
  const firstNum = Number(str1.slice(-1));
  if (isNaN(firstNum)) return;
  const secondNum = str2.length > 2 ? Number(str2.slice(-2)) : Number(str2);
  if (isNaN(secondNum)) return;
  
  // cache for possible end digits
  const endDigits = new Set();
  // array to preserve order of last digits found
  const order = [];
  // counter
  let counter = 0;
  
  // collect all possible end digits until they start repeating themselves
  while (true) {
    counter += 1;
    const pow = Math.pow(firstNum, counter).toString();
    const digit = Number(pow.charAt(pow.length - 1));
    // if we made it to the end of the loop then we have the right digit
    if (counter === secondNum) return digit;
    // add the new end digit to the set for uniqueness and array for order
    if (!endDigits.has(digit)) {
      endDigits.add(digit);
      order.push(digit);
    }
    // we have started duplicating end digits
    else break;
  }
  
  // find last digit
  const index = secondNum % order.length;
  return index === 0 ? order[order.length - 1] : order[index - 1];
}
