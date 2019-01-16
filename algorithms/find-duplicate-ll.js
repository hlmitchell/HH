// Using a Linked list, foot of cycle

function Node(val) {
  this.value = val;
  this.next = null;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next;

function findCycleRoot(node) {



}

console.log(findCycleRoot(head));