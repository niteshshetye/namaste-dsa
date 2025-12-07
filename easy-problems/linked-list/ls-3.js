// Linked list has cycle (easy problem)

/**
 * time complexity: O(n)
 * space complexity: o(n)
 *
 * @param {ListNode} head
 * @returns {Boolean}
 */

function hasCycle(head) {
  let seenNodes = new Set();

  let curr = head;

  while (curr && curr.next) {
    if (seenNodes.has(curr)) return true;

    seenNodes.add(curr);
    curr = curr.next;
  }

  return false;
}

// Optimized way Floyd’s Cycle-Finding Algorithm

/**
 * time complexity: O(n)
 * space complexity: o(1)
 *
 * @param {ListNode} head
 * @returns {Boolean}
 */

function hasCycleOptimized(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow == fast) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}
