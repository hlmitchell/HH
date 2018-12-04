/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const vals = {};
  return {
    length: 0,
    push: function(val) {
      vals[this.length++] = val;
    },
    pop: function() {
      if (this.length === 0) return -1;
      else return vals[--this.length];
    }
  }
}

function Queue() {
  const firstStack = Stack();
  const secondStack = Stack();
  let length = 0;
  return {
    enqueue: function(val) {
      if (secondStack.length > 0) {
        for (let i = 0; i < length; i++) {
          firstStack.push(secondStack.pop());
        }
      }
      length += 1;
      firstStack.push(val);
    },
    dequeue: function() {
      if (firstStack.length > 0) {
        for (let i = 0; i < length; i++) {
          secondStack.push(firstStack.pop());
        }
      }
      length -= 1;
      return secondStack.pop();
    }
  }
}

const nq = Queue();

nq.enqueue(1);
console.log(nq.dequeue());
nq.enqueue(2);
nq.enqueue(3);

console.log(nq.dequeue());
console.log(nq.dequeue());

module.exports = {Stack: Stack, Queue: Queue};