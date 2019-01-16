// Using a Linked list, find a duplicate integer in O(n) time while keeping our space cost at O(1).

function Node(val) {
  this.value = val;
  this.next = null;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(3);

console.log(head);