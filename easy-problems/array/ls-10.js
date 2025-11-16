/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function (nums) {
  let p1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[p1] < nums[i]) {
      nums[p1 + 1] = nums[i];
      p1++;
    }
  }

  return p1 + 1;
};

console.log(removeDuplicates(nums));
