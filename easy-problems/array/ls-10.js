/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;

  // Total sum as per the array length
  let sumOfNNumber = (n * (n + 1)) / 2;

  // Total sum as per the number present in array
  let currNNumberSum = 0;

  for (let i = 0; i < n; i++) {
    currNNumberSum += nums[i];
  }

  // missing number is diff
  return sumOfNNumber - currNNumberSum;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
