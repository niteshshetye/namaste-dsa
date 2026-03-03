// Trapping rain water
// https://leetcode.com/problems/trapping-rain-water/

function trap(arr) {
  let maxL = [arr[0]],
    maxR = [];

  for (let i = 1; i < arr.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], arr[i]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    maxR[i] = maxR[i + 1] ? Math.max(maxR[i + 1], arr[i]) : arr[i];
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.max(Math.min(maxL[i], maxR[i]) - arr[i], 0);
  }

  return sum;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
