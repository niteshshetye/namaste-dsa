// Find Minimum in Rotated Sorted Array

// nums = [4,5,6,7,0,1,2]
// output: 0;

function findMinium(nums) {
  let l = 0;
  r = nums.length - 1;

  while (l <= r) {
    // already sorted
    if (nums[l] <= nums[r]) {
      return nums[l];
    }

    let m = l + Math.floor((r - l) / 2);

    if (nums[m] < nums[m - 1]) {
      return nums[m];
    }

    // left sorted
    if (nums[l] <= nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
}
