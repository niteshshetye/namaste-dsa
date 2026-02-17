// 33. Search in Rotated Sorted Array

function searchInRotatedSortedArray(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) {
      return m;
    }

    // left sorted portion
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    // right sorted portion
    else {
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
}

// console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(searchInRotatedSortedArray([1], 0));
console.log(searchInRotatedSortedArray([6, 7, 8, 0, 1, 2, 3, 4, 5], 0));
