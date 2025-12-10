import { LinkedList, Node } from "./ls-1.js";

var removeElements = function (head, val) {
  let sentinalNode = new Node();
  sentinalNode.next = head;

  let prev = sentinalNode;
  while (prev && prev.next) {
    if (prev.next.value === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinalNode.next;
};

let linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(2);

console.log(JSON.stringify(removeElements(linkedList.get(), 2)));
