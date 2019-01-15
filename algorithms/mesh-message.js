// You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.

// Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, 
// passing each message along from one phone to the next until it reaches the intended recipient. 
// (Don't worry—the messages are encrypted while they're in transit.)

// Some friends have been using your service, and they're complaining that it takes a long time for messages to get 
// delivered. After some preliminary debugging, you suspect messages might not be taking the most direct route from the 
// sender to the recipient.

// Given information about active users on the network, find the shortest route for a message from one user (the sender) 
// to another (the recipient). Return an array of users that make up this route.

// There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

// Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

  const network = {
  'A' : ['B', 'D'],
  'B' : ['A', 'E'],
  'C' : ['F', 'G', 'E'],
  'G' : ['C', 'D'],
  'F' : ['C', 'H', 'I'],
  'H' : ['F', 'I'],
  'I' : ['F', 'H', 'N'],
  'E' : ['N', 'C', 'B'],
  'D' : ['G', 'A'],
  'N' : ['I', 'E']
};

function meshMessage(start, end) {
  const queue = [[start]];
  const set = new Set();
  let counter = 0;

  while (queue.length > 0) {
    const nextBatch = queue.shift();
    counter += 1;
    const tempArr = [];

    for (let i = 0; i < nextBatch.length; i++) {
      if (nextBatch[i] === end) return counter;

      network[nextBatch[i]].forEach(letter => {
        if (!set.has(letter)) {
          tempArr.push(letter);
          set.add(letter);
        }
      })
    }

    if (tempArr.length > 0) queue.push(tempArr);
  }

  return counter;
}

// For the network above, a message from C to H should have this route: ['C', 'F', 'H'] or 3
console.log(meshMessage('C', 'H'));

console.log(meshMessage('A', 'N')); // 3