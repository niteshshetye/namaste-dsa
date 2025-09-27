/**
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
function reverseInteger(x) {
  const xCopy = x;

  let rev = 0;
  x = Math.abs(x);

  while (x > 0) {
    const lastDigit = x % 10;
    rev = 10 * rev + lastDigit;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);

  if (rev > limit) {
    return 0;
  }

  return xCopy < 0 ? -rev : rev;
}

const value = reverseInteger(-123);
console.log(value);
