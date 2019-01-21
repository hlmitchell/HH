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

function find2ndLargestElement(root, currentMax = root.value) {
  if (!root.right && !root.left) {
    return currentMax < root.value ? currentMax : root.value;
  }
  if (root.right) {
    const max = currentMax > root.value ? currentMax : root.value;
    return find2ndLargestElement(root.right, max);
  }
  if (root.left) {
    if (!root.left.right) return root.left.value;
    return find2ndLargestElement(root.left, root.value);
  }
}

const bst = new BinaryTreeNode(5);
// bst.insertLeft(3).insertLeft(1);
// const val13 = bst.insertRight(10).insertRight(13);
// const val11 = val13.insertLeft(11);
// val11.insertRight(12);

console.log(find2ndLargestElement(bst));