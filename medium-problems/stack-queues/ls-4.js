// Next Greater Element - II

function nextGreaterElement2(nums) {
  // 2x the array
  let arr = [...nums, ...nums];
  let n = arr.length,
    stack = [],
    ans = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr[i]) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }

    if (!stack.length) {
      ans[i] = -1;
    }

    stack.push(arr[i]);
  }

  return ans.slice(0, nums.length);
}

function nextGreaterElement2Optimized(arr) {
  let n = arr.length,
    stack = [],
    ans = [];

  // simulate the array as 2x the original array
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr[i % n]) {
        ans[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }

    if (!stack.length) {
      ans[i % n] = -1;
    }

    stack.push(arr[i % n]);
  }

  return ans;
}

console.log(nextGreaterElement2Optimized([1, 2, 1]));
