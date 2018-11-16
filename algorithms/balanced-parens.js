/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

// function balancedParens(input){
//   const stack = [];
//   for (let i = 0; i < input.length; i++) {
//     switch(input[i]) {
//       case '{':
//       case '[':
//       case '(':
//         stack.push(input[i]);
//         break;
//       case '}':
//         if (stack.pop() !== '{') return false;
//         break;
//       case ']':
//         if (stack.pop() !== '[') return false;
//         break;
//       case ')':
//         if (stack.pop() !== '(') return false;
//         break;
//       default:
//         break;
//     }
//   }
//   return stack.length > 0 ? false : true;
// }

function balancedParens(input){
  // declare vars
  const matches = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }
  const stack = [];
  // iterate through our string
  for (let i = 0; i < input.length; i ++) {
    // encouter an opening parens, add it to our stack
    if (matches.hasOwnProperty(input[i])) stack.push(input[i]);
    // encouter a closing parens, we will pop off the stack and compare
    else if (input[i] === ']' || input[i] === '}' || input[i] === ')') {
      if (matches[stack.pop()] !== input[i]) return false;
    }
  }
  return stack.length > 0 ? false : true;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;