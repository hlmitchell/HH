// check if the tree is balanced

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(value) {
    if (this.value === undefined) this.value = value;
    else {
      if (value < this.value) {
        if (!this.left) this.left = new BinaryTreeNode(value);
        else this.left.addNode(value);
      } else if (value > this.value) {
        if (!this.right) this.right = new BinaryTreeNode(value);
        else this.right.addNode(value);
      }
    }
  }
}

// balanced
const newTree = new BinaryTreeNode(10);
newTree.addNode(5);
newTree.addNode(15);
newTree.addNode(3);
newTree.addNode(7);
newTree.addNode(9);
newTree.addNode(12);
newTree.addNode(16);

// unbalanced
const newTree2 = new BinaryTreeNode(10);
newTree2.addNode(5);
newTree2.addNode(15);
newTree2.addNode(3);
newTree2.addNode(7);
newTree2.addNode(8);
newTree2.addNode(9);
newTree2.addNode(12);
newTree2.addNode(16);

function isBalanced(root) {

  let balanced = true;

  function inner(node) {
    if (!balanced) return 2;

    let leftHeight = -1;
    let rightHeight = -1;

    if (node.left) leftHeight = inner(node.left);
    if (node.right) rightHeight = inner(node.right);
    if (leftHeight >= 2 || rightHeight >= 2) balanced = false;

    return Math.abs(leftHeight - rightHeight);
  }

  inner(root);
  return balanced;
}

console.log(isBalanced(newTree));
console.log(isBalanced(newTree2));
