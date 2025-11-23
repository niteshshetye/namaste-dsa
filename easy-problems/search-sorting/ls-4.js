// Selection sort
function selectionSort(arr) {
  let n = arr.length;

  // Iterate n - 1 times
  for (let i = 0; i < n - 1; i++) {
    let min = i;

    // Find minimum in remaining array
    for (let j = i + 1; j < n; j++) {
      // Update minimun if found
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // If already sorted
    if (min !== i) {
      // Swap
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  console.log("sorted arrays: ", arr);

  return arr;
}

selectionSort([5, 2, 4, 1, 6, 3, 9]);

var longestCommonPrefix = function (strs) {
  let [commonPrefix = ""] = strs;
  for (let index = 1; index < strs.length; index++) {
    if (commonPrefix !== strs[index]) {
      for (let prefIndex = 0; prefIndex < commonPrefix.length; prefIndex++) {
        if (commonPrefix[prefIndex] !== strs[index][prefIndex]) {
          commonPrefix = commonPrefix.substring(0, prefIndex);
        }
      }
    }
  }
  return commonPrefix;
};
