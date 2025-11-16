// Write a function that searches for an element in an array and returns its index. If the element is not found, return -1.

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Element found, return index
    }
  }
  return -1; // Element not found
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
const target1 = 30;
const target2 = 60;

console.log(searchElement(myArray, target1)); // Output: 2
console.log(searchElement(myArray, target2)); // Output: -1
console.log("****************");

// Write a function that returns the number of negetive numbers in an array.

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// Example usage:
const arrayWithNegatives = [10, -5, 3, -1, 0, -7, 8];
console.log(countNegativeNumbers(arrayWithNegatives)); // Output: 3

console.log("****************");

// Write a function that return a largest number in an array.

const findLargestNumber = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let largestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    largestNumber = Math.max(arr[i], largestNumber);
  }

  return largestNumber;
};

// Example usage:
const numbersArray = [3, 5, 7, 2, 8, -1, 4];
console.log(findLargestNumber(numbersArray)); // Output: 8

console.log("****************");

// Write a function that return the smallest number in an array.

const findSmallestNumber = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let smallestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    smallestNumber = Math.min(arr[i], smallestNumber);
  }

  return smallestNumber;
};

// Example usage:
const numsArray = [3, 5, 7, 2, 8, 4];
console.log(findSmallestNumber(numsArray)); // Output: 2

console.log("****************");
