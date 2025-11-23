// Insertion sort algorithm implementation in JavaScript

function insertionSort(arr) {
  let n = arr.length;
  debugger;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let pre = i - 1;

    while (arr[pre] > curr && p >= 0) {
      arr[pre + 1] = arr[pre];
      pre--;
    }

    arr[pre + 1] = curr;
  }

  console.log(arr);
}

insertionSort([7, 4, 3, 5, 1, 2]);
