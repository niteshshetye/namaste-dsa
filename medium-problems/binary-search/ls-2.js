// 162. Find Peak Element

function findPeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    // find middle
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

// test cases
console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
