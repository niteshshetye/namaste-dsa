// Linked list
/**
 * 1. Linear data structure
 * 2. nodes are linked together using by a reference (pointer)
 * 3. Each node contains:
 *    - data
 *    - pointer to the next node
 *
 * 4. Types of linked list:
 *    - Singly linked list
 *    - Doubly linked list
 *    - Circular linked list
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  createNode(value) {
    return new Node(value);
  }

  addToHead(value) {
    let node = this.createNode(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  addToTail(value) {
    let node = this.createNode(value);

    let curr = this.head;

    // if its empty list then add to head
    if (curr == null) {
      this.head = node;
      this.size++;
      return;
    }

    // traverse to the end of the list
    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = node;
    this.size++;
  }

  addToIndex(value, index) {
    let node = this.createNode(value);

    if (index > 0 || this.size < index) return;

    if (index === 0) {
      this.addToHead(value);
      return;
    }

    if (index === this.size) {
      this.addToTail(value);
      return;
    }

    // traverse to the index - 1 position
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    node.next = curr.next;
    curr.next = node;

    this.size++;
  }

  getByIndex(index) {
    if (index < 0 || this.size <= index) {
      return -1;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.value;
  }

  deleteIndex(index) {
    if (index < 0 || this.size <= index) return;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
  }

  get() {
    return this.head;
  }
}

// const linkedList = new LinkedList();
// linkedList.addToHead(5);
// linkedList.addToHead(4);
// linkedList.addToHead(3);
// linkedList.addToHead(2);
// linkedList.addToHead(1);

// linkedList.deleteIndex(1);

// console.log(JSON.stringify(linkedList));
