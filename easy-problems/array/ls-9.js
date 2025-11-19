/**
 * @param {number[]} nums
 * @return {number} the maximum consecutive number of 1's in the array.
 */
function maxConsecutiveNumber(nums) {
  let maxCount = 0;
  let currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }

  return Math.max(maxCount, currCount);
}

const ans = maxConsecutiveNumber([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1]);
console.log(ans);
