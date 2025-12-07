// Palindrome Linked List (easy problem)

import { LinkedList } from "./ls-1.js";

/**
 * time complexity: O(n)
 * space complexity: o(n)
 *
 * @param {ListNode} head
 * @returns {Boolean}
 */

function isPalindrome(arr) {
  let n = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[n - i]) {
      return false;
    }
  }

  return true;
}

function isPalindromeLinkedList(head) {
  let value = [];

  let curr = head;
  while (curr) {
    value.push(curr.value);
    curr = curr.next;
  }

  return isPalindrome(value);
}

// HELPER METHODS
function generatePalindromeLinkedList(n) {
  const linkedList = new LinkedList();

  for (let i = 1; i <= n / 2; i++) {
    linkedList.addToTail(i);
  }

  for (let i = n / 2; i >= 1; i--) {
    linkedList.addToTail(i);
  }

  return linkedList;
}

const linkedList = generatePalindromeLinkedList(6);

console.log("isPalindrome: ", isPalindromeLinkedList(linkedList.get()));

// Optimized Approach

/**
 * time complexity: O(n)
 * space complexity: o(1)
 *
 * step 1 :find middle of linked list
 * step 2: reverse second half of linked list
 * step 3: compare first half and second half
 *
 * @param {ListNode} head
 * @returns {Boolean}
 */

function isPalindromeLinkedListOptimized(head) {
  if (!head || !head.next) return true;

  // step 1 :find middle of linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // step 2: reverse second half of linked list
  let prev = null;
  let curr = slow;

  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // step 3: compare first half and second half
  let left = head;
  let right = prev;

  while (right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}

console.log(
  "isPalindrome: ",
  isPalindromeLinkedListOptimized(linkedList.get())
);
