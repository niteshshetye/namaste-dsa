// Write a function that count a digits in given

const countDigits = (n) => {
  // n is 0 then it should return 1
  if (n == 0) return 1;

  // Convert Negetive number to positve number
  n = Math.abs(n);

  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
};

const value = countDigits(234234);
console.log(value);
