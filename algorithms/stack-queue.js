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