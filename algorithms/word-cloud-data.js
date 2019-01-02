// You want to build a word cloud, an infographic where the size of a word corresponds to how 
// often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud 
// data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words 
// to counts. And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

// "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."

// What do we want to do with "After", "Dana", and "add"? In this example, your final map should 
// include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about 
// cases like "After" and "Dana".

function wordCloud(sentence) {
  const punc = new Set();
  punc.add(',');
  punc.add('.');
  punc.add(':');
  punc.add(' ');
  punc.add('');

  const frequency = {};

  let tempWord = '';

  for (let i = 0; i < sentence.length; i++) {
    if (!punc.has(sentence[i])) tempWord += sentence[i].toLowerCase();
    else if (tempWord !== '') {
      if (!frequency[tempWord]) frequency[tempWord] = 1;
      else frequency[tempWord] += 1;
      tempWord = '';
    }
  }

  return frequency;
}

const sentence = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.";

console.log(wordCloud(sentence));