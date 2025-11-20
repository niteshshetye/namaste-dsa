/**
 * Binnary Search Algorithm
 * @param {array} arr
 * @param {number} target
 * @returns {number}
 */
function binnarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  //   When right cross left
  while (r >= l) {
    let middle = Math.ceil((l + r) / 2);

    if (target == arr[middle]) return middle;

    if (target > arr[middle]) {
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }

  return -1;
}

// Example usage:
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 0));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 1));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 2));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 3));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 4));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 6));
console.log(binnarySearch([0, 1, 2, 3, 4, 5, 6, 7], 7));
