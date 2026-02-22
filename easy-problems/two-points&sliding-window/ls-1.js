// two Sum

function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];

    if (map[rem] && map[rem] !== i) {
      return [i, map[rem]];
    }
  }
}
