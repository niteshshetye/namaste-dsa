const removeElement = function (arr, val) {
  let p1 = 0; // move in each iteration

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[p1] = arr[i];
      p1++;
    }
  }

  return p1;
};

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const nums = [3, 2, 2, 3];
const value = 2;

console.log(removeElement(nums, value));
