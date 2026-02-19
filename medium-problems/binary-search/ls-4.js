// Find First and Last Position of Element in Sorted Array

function findFirstAndLastPosition(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  let ans = [-1, -1];

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (arr[l] === target) {
    ans[0] = l;
  }

  l = 0;
  r = arr.length - 1;

  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);

    if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }

  if (arr[l] === target) {
    ans[1] = l;
  }

  return ans;
}

function findFirstAndLastPositionApproach2(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  let ans = [-1, -1];

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  l = 0;
  r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] === target) {
      ans[1] = m;
      l = m + 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return ans;
}

console.log(findFirstAndLastPositionApproach2([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(findFirstAndLastPositionApproach2([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
