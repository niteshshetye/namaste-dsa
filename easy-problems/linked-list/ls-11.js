// merge sorted linked lists
// https://leetcode.com/problems/merge-two-sorted-lists/

import { LinkedList, Node } from "./ls-1.js";

const l1 = new LinkedList();
l1.addToTail(1);
l1.addToTail(2);
l1.addToTail(5);
l1.addToTail(6);

const l2 = new LinkedList();
l2.addToTail(1);
l2.addToTail(3);
l2.addToTail(4);
l2.addToTail(7);

function mergeSortedLinkedList(l1, l2) {
  let dummyNode = new Node();
  let dummyNodeStart = dummyNode;

  while (l1 && l2) {
    if (l1.value > l2.value) {
      dummyNode.next = l2;
      l2 = l2.next;
    } else {
      dummyNode.next = l1;
      l1 = l1.next;
    }

    dummyNode = dummyNode.next;
  }

  if (!l1) {
    dummyNode.next = l2;
  }

  if (!l2) {
    dummyNode.next = l1;
  }

  return dummyNodeStart.next;
}

console.log(JSON.stringify(mergeSortedLinkedList(l1.get(), l2.get())));
