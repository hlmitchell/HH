// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

let merge2Lists = function(list1 ,list2) {
  let tracker1 = list1;
  let tracker2 = list2;
  let final = list1.val < list2.val ? list1 : list2;
  let temp = final;
  
  while(tracker1 && tracker2) {
    while (tracker1.next && tracker1.next.val < tracker2.val) {
        tracker1 = tracker1.next;
    }
    temp = tracker1.next;
    tracker1.next = tracker2;
    tracker1 = temp;
    
    while(tracker2.next && tracker2.next.val < tracker1.val) {
      tracker2 = tracker2.next
    }
    temp = tracker2.next;
    tracker2.next = tracker1;
    tracker2 = temp;
  }
  
  return final;
}

const mergeKLists = function(lists) {
    // edge case for no lists
    if (lists.length < 1) return;
    // recursive base case
    if (lists.length === 1) return lists[0];
    
    counter = 0;
    const newLists = [];
    
    while (counter < lists.length - 2) {
        newLists.push(merge2Lists(lists[counter], lists[counter + 1]));
        counter += 2;
    }
    // add the final list if there was an odd number
    if (lists.length % 2 === 1) newLists.push(lists[lists.length - 1]);
    
    console.log(newLists);
};

module.exports = mergeLists;