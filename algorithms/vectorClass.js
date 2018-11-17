// Create a Vector object that supports addition, subtraction, 
// dot products, and norms. So, for example:

// let a = new Vector([1, 2, 3]);
// let b = new Vector([3, 4, 5]);
// let c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error

class Vector {
  constructor(initialArr) {
    this.array = initialArr;
    this.math = this.math.bind(this);
  }

  math(newVector, callback) {
    const newArr = [];
    let i = 0;
    let j = 0;
    for (; i < this.array.length || j < newVector.array.length; i++, j++) {
      if (i < this.array.length && j < newVector.array.length)
        newArr.push(callback(newVector, i));
      else if (i < this.array.length)
        newArr.push(this.array[i]);
      else  
        newArr.push(newVector.array[j]);
    }
    return new Vector(newArr);
  }

  add(newVector) {
    const addElements = (newVec, i) => this.array[i] + newVec.array[i];
    return this.math(newVector, addElements);
  }

  subtract(newVector) {
    const subtractElements = (newVec, i) => this.array[i] - newVec.array[i];
    return this.math(newVector, subtractElements);
  }
  
};

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5, 10]);
let c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
// console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
// console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// console.log(a.add(c));      // throws an error