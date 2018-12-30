// I suspect the online poker game I'm playing shuffles cards by doing a single riffle. ↴

// To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a 
// single riffle of two other halves half1 and half2.

// We'll represent a stack of cards as an array of integers in the range 1..521..52 
// (since there are 5252 distinct cards in a deck).

function singleRiffle(deck) {
  let first = deck[0];
  let second;
  for (let i = 1; i < deck.length; i++) {
    if (deck[i] - 1 === first) first = deck[i];
    else if (second === undefined || deck[i] - 1 === second) second = deck[i];
    else return false;
  }
  return true;
}

const deck1 = [1,2,6,7,3,4,5,8,9];
const deck2 = [8,3,5,2,1,2,3,4];

console.log(singleRiffle(deck1));
console.log(singleRiffle(deck2));