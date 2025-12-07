// Find middle node of linked list

/**
 * Will apply slow and fast pointer
 */

import { LinkedList } from "./ls-1.js";

const createNLengthlinkedList = (n) => {
  const linkedList = new LinkedList();

  for (let i = 0; i < n; i++) {
    linkedList.addToTail(i + 1);
  }

  return linkedList;
};

let linkedList = createNLengthlinkedList(11);

// Fast and Slow pointer approach
function findMiddleOfNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}

console.log(findMiddleOfNode(linkedList.get()));

console.log(reverseLinkedList(linkedList.get()));
