// Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/

/**
 *
 * @param {*} num
 * return num === peak => 0
 * return num < peak => -1
 * return num > peak => 1
 *
 */
function guess(num) {}

function guessNumber(n) {
  let l = 1;
  let r = n;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res < 0) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
}
