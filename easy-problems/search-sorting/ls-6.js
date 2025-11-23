// Merge sort implementation in JavaScript

function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;

  let newArray = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      newArray.push(arr2[p2]);
      p2++;
    } else {
      newArray.push(arr1[p1]);
      p1++;
    }
  }

  return [...newArray, ...arr1.slice(p1), ...arr2.slice(p2)];
}

function mergeSort(arr) {
  // Base case
  if (arr.length < 2) return arr;

  // Divide from between
  let mid = Math.ceil(arr.length / 2);

  // Calculate left side and right side
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merge left and right side
  return merge(left, right);
}

console.log(
  mergeSort([
    4, 3, 2, 10, 12, 1, 5, 6, 38, 27, 43, 3, 9, 82, 10, 12, 11, 13, 5, 6, 7, 5,
    2, 4, 1, 6, 3, 9,
  ])
);
