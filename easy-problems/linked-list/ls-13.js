// Swap nodes in pairs of a linked list
// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

import { LinkedList, Node } from "./ls-1.js";

const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.addToTail(6);

function swapPairsIterativeApproach(head) {
  if (!head || !head.next) return head;

  let curr = head;
  let next = curr.next;
  let prev = new Node();
  prev.next = head;
  let prevStart = prev;

  while (curr && curr.next) {
    // swap
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    // move pointers
    prev = curr;
    curr = prev.next;
    next = curr && curr.next;
  }

  return prevStart.next;
}

function swapPairsRecursiveApproach(head) {
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  // swap
  left.next = swapPairsRecursiveApproach(right.next);
  right.next = left;

  return right;
}

console.log(
  JSON.stringify(swapPairsIterativeApproach(linkedList.get()), null, 2)
);
console.log(
  JSON.stringify(swapPairsRecursiveApproach(linkedList.get()), null, 2)
);
