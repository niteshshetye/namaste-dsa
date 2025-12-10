import { LinkedList, Node } from "./ls-1.js";

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.value === curr.next.value) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

let linkedList = new LinkedList();
linkedList.addToTail(1); // curr
linkedList.addToTail(1);
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);

console.log(JSON.stringify(linkedList.get()));

console.log(JSON.stringify(deleteDuplicates(linkedList.get())));
