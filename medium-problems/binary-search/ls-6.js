// Single Element in a Sorted Array

// arr = [1,1,2,3,3,4,4,8,8]
// arr = [1,1,2,2,3,3,4,8,8]

function singleElementInSorted(arr) {
  let l = 0;
  r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    // pair on left
    if (arr[m] === arr[m - 1]) {
      let leftCount = m - 1 - l;
      // left side odd elements
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
      // pair on right
    } else if (arr[m] === arr[m + 1]) {
      let leftCount = m - l;

      // left side odd elements
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
      // single element
    } else {
      return arr[m];
    }
  }
}
