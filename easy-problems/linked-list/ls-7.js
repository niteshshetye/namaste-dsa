import { LinkedList, Node } from "./ls-1.js";

// Remove Nth node from end of list

let linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(2);

var removeNthFromEnd = function (head, n) {
  let sentinel = new Node();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  console.log(length);

  let prevPositon = length - n; // 5 - 1 = 4

  let prev = sentinel;
  for (let i = 0; i < prevPositon; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinel.next;
};

// One pass solution
var removeNthFromEndOptimized = function (head, n) {
  let sentinel = new Node();
  sentinel.next = head;

  let first = sentinel;
  let second = head;
  for (let i = 0; i < n; i++) {
    second = second.next;
  }

  while (second) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;

  return sentinel.next;
};

console.log(JSON.stringify(removeNthFromEndOptimized(linkedList.head, 1)));
