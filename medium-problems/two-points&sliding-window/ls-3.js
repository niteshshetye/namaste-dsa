// Longest Substring Without Repeating Characters

function longestSubstringWithoutRepeating(str) {
  let map = {};
  let i = 0;
  let max = 0;

  for (let j = 0; j < str.length; j++) {
    // present in window
    if (map[str[j]] !== undefined && map[str[j]] >= i) {
      i = map[str[j]] + 1;
    }

    map[str[j]] = j;
    let currLength = j - i + 1;
    max = Math.max(currLength, max);
  }

  return max;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3
// console.log(longestSubstringWithoutRepeating("bbbbb"));
// console.log(longestSubstringWithoutRepeating("pwwkew"));
// console.log(longestSubstringWithoutRepeating(""));
// console.log(longestSubstringWithoutRepeating("abcdeafbdgcbb"));
