// 239. Sliding Window Maximum

/**
 * Example 1:

    Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
    Output: [3,3,5,5,6,7]
    Explanation: 
    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7      3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7

    Monotonic Decreasing deque: Deque which is in decreasing order, so that we can get max in O(1) time
 */

function maxSlidingWindow(arr, k) {
  let res = [],
    deque = [];

  let i = 0;
  j = 0;

  while (j < arr.length) {
    // removing all smaller element from back of deque
    while (deque.length && deque[deque.length - 1] < arr[j]) {
      deque.pop();
    }
    // push current element
    deque.push(arr[j]);

    if (j >= k - 1) {
      res.push(deque[0]);
      // If window's starting point is max then remove
      // becuase now i shift and max will out of window size
      deque[0] === arr[i] && deque.shift();

      ++i;
    }

    ++j;
  }

  return res;
}
