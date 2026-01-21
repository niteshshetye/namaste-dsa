// Next Greater Element I
// leetcode: https://leetcode.com/problems/next-greater-element-i/

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let nextGreaterMap = {};

  let n = nums2.length;

  stack.push(nums2[n - 1]);
  nextGreaterMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let curr = nums2[i];

    while (stack.length) {
      if (stack[stack.length - 1] < curr) {
        stack.pop();
      } else {
        nextGreaterMap[curr] = stack[stack.length - 1];
        break;
      }
    }

    if (stack.length === 0) {
      nextGreaterMap[curr] = -1;
    }

    stack.push(curr);
  }

  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(nextGreaterMap[nums1[i]]);
  }

  return result;
}

const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
