// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

import { LinkedList } from "./ls-1.js";

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// const tens = Math.floor(num / 10); // 1
// const ones = num % 10;

function getCarryAndDigit(num) {
  const tens = Math.floor(num / 10); // 1
  const ones = num % 10;

  return [ones, tens];
}

function addTwoLinkedList(headA, headB) {
  let carry = 0;
  let ans = new ListNode();
  let ansHead = ans;

  while (headA || headB || carry) {
    let l1Value = headA?.val || 0;
    let l2Value = headB?.val || 0;

    let nodeValueSum = l1Value + l2Value + carry;
    let [digit, currCarry] = getCarryAndDigit(nodeValueSum);
    carry = currCarry;

    ans.next = new ListNode(digit);
    ans = ans.next;

    headA = headA && headA.next;
    headB = headB && headB.next;
  }

  return ansHead.next;
}
