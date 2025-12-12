// Rotate Linked List
// Given the head of a linked list, rotate the list to the right by k places.
import { LinkedList } from "./ls-1.js";

const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);

function getLinkedListLength(head) {
  let curr = head;
  let lenght = 0;
  while (curr) {
    curr = curr.next;
    lenght++;
  }
  return lenght;
}

function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let length = getLinkedListLength(head);
  k = k % length;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // last node points to head;
  fast.next = head;
  // new head is slow.next
  let newHead = slow.next;
  // break the link
  slow.next = null;

  return newHead;
}

console.log(JSON.stringify(rotateRight(linkedList.get(), 6), null, 2));
