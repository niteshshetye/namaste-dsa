// Bubble sort
function bubbleSort(arr) {
  let n = arr.length;

  // n - 1 interation
  for (i = 0; i < n - 1; i++) {
    let isSwapped = false;

    // (n - 1, n - 2, n - 3, ... 1) times iteration
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  console.log(arr);
}

bubbleSort([5, 2, 4, 1, 6, 3, 9]);
