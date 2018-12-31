// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function permutationPalindrome(word) {
  const letterSet = new Set();

  for (let i = 0; i < word.length; i++) {
    if (letterSet.has(word[i])) letterSet.delete(word[i]);
    else letterSet.add(word[i]);
  }

  return letterSet.size <= 1;
}

console.log(permutationPalindrome('civic'));
console.log(permutationPalindrome('ivicc'));
console.log(permutationPalindrome('civil'));
console.log(permutationPalindrome('livci'));