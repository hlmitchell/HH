// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major 
// European National Cake Vault. The message has been mostly deciphered, but all the words are backward! 
// Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order 
// of the words in place. ↴

const reverseArray = require('./reverse-array');

function reverseWords(message) {
  reverseArray(message);

  let front = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      reverseArray(message, front, i - 1)
      front = i + 1;
    } else if (i + 1 === message.length) {
      reverseArray(message, front, i)
    }
  }
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);
console.log(message.join(''));
// Prints: 'steal pound cake'
