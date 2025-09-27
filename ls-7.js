// Panlindrom number

const isPalindromNumber = (n) => {
  if (n < 0) return false;

  let reverse = 0;
  const originalValue = n;

  while (n > 0) {
    let lastDigit = n % 10;
    reverse = 10 * reverse + lastDigit;
    n = Math.floor(n / 10);
  }

  return reverse === originalValue;
};

const value = isPalindromNumber(1212);
console.log(value);
