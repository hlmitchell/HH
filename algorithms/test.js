
const array = [1, 2, 3];

function addNum(num) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const updated = array[i] + num;
    output.push(updated);
  }

  return output;
}

console.log(addNum(10)); // prints [11, 12, 13]
console.log(addNum(20)); // prints [21, 22, 23]