// Find K Closest Elements

/**
 * Input: arr = [1,2,3,4,5], k = 4, x = 3
 * Output: [1,2,3,4]
 */

function findClosestElements(arr, k, x) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (!arr[m + k] || x - arr[m] <= arr[m + k] - x) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return arr.slice(l, l + k);
}

// Test cases
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // Output: [1, 2, 3, 4]
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // Output: [1, 2, 3, 4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6)); // Output: [2, 3, 4, 5]
