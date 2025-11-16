// Reverse String in Place
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  if (!s.length) {
    return null;
  }

  if (s.length == 1) {
    return s;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let swap = s[left];
    s[left] = s[right];
    s[right] = swap;
    left++;
    right--;
  }

  console.log(s);
}

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
reverseString(["A"]);
reverseString([]);
reverseString(["a", "b"]);
reverseString(["a", "b", "c"]);
reverseString(["a", "b", "c", "d"]);
