/**
 * Linear Search Algorithm
 * @param {array} arr
 * @param {number} target
 * @returns {number}
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}

// Example usage:
console.log(linearSearch([4, 2, 5, 1, 3], 1));
