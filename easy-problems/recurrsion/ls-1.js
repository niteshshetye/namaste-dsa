// Recurrsion
// Sum of n number
function sumOfNNumber(n) {
  if (n == 1) return 1;

  return n + sumOfNNumber(n - 1);
}

console.log(sumOfNNumber(5));

// Sum of Element in array
const nums = [5, 3, 2, 0, 1];

function sumOfElementInArray(n) {
  if (n == 0) return nums[0];

  return nums[n] + sumOfElementInArray(n - 1);
}

console.log(sumOfElementInArray(nums.length - 1));

// Sum of Odd Elements in array
const arr = [3, 5, 2, 0, 1, 2];

function sumOfOddElementInArray(n) {
  let isOdd = arr[n] % 2 !== 0;

  let value = isOdd ? arr[n] : 0;

  if (n == 0) return value;

  return value + sumOfOddElementInArray(n - 1);
}

console.log(sumOfOddElementInArray(arr.length - 1));
