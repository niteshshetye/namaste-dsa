/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let p1 = 0;

  // Move non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      p1++;
    }
  }

  // Fill remaining positions with zeros
  for (let i = p1; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
