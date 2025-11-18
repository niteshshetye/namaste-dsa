// Second Largest Element in an Array

const arr = [8, 5, 7, 0, 9, 0, 4];

function secondLargestNumber(arr) {
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] != largestNumber) {
      secondLargestNumber = arr[i];
    }
  }

  return secondLargestNumber;
}

const value = secondLargestNumber(arr);
