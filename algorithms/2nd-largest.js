// Write a function to find the 2nd largest element in a binary search tree. 

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function find2ndLargestElement(root) {

}

const bst = new BinaryTreeNode(5);
bst.insertLeft(3).insertLeft(1);
bst.insertRight(10).insertRight(12);

console.log(find2ndLargestElement(bst));