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
  // modifiers of nodes to keep track
  node.tracker1 = true;

  // tracker2 will increment every loop, tracker1 will increment every other loop
  let tracker1 = node;
  let tracker2 = node;

  // determines which trackers should move
  let counter = 1;

  // not a cycle if loop terminates
  while(tracker2.next !== null) {
    if (counter % 2 === 0) {
      tracker1 = tracker1.next;
      tracker1.tracker1 = true;
    }

    tracker2 = tracker2.next;
    if (tracker2.tracker1) return tracker2.value;

    counter += 1;
  }
}

console.log(findCycleRoot(head));