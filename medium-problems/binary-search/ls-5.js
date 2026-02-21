// Peak Index in a Mountain Array

function peakIndexInMountain(arr) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

console.log(peakIndexInMountain([0, 1, 0])); // 1
console.log(peakIndexInMountain([0, 3, 2, 1])); // 2
