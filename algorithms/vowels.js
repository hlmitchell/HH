function vowels(arr) {
  let total = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelI = 0;
  let lastVowel;

  for (let i = 0; i < arr.length; i++) {
    if (total === 0 && arr[i] === vowels[0]) {
      total += 1;
      lastVowel = vowels[vowelI];
    }
    else if (arr[i] === vowels[vowelI]) {
      total += 1;
      lastVowel = vowels[vowelI];
    }
    else if (arr[i] === vowels[vowelI + 1]) {
      total += 1;
      vowelI += 1;
      lastVowel = vowels[vowelI + 1] ? vowels[vowelI + 1] : lastVowel;
    }
  }
  return lastVowel === vowels[4] ? total : 0;
}

console.log(vowels('aeeeiioouu')); //10
console.log(vowels('aeeaaeieeioouu')); //10
console.log(vowels('aeeaaeieeioo')); //0
console.log(vowels('waewedaqaediefeioou')); //9

