// Odd even linked list
import { LinkedList } from "./ls-1.js";

const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);

function oddEvenLinkedList(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;

  return head;
}

console.log(JSON.stringify(oddEvenLinkedList(linkedList.get())));
