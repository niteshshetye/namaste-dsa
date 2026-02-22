// Two Sum II - Input Array Sorted

const twoSum = function (arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let sum = arr[l] + arr[r];

    if (sum == target) {
      return [l + 1, r + 1];
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
};
