// 424. Longest Repeating Character Replacement

function isValidWindow(map, k) {
  const keys = Object.keys(map);
  let maxCount = -1;
  const totalCount = keys.reduce((acc, curr) => {
    maxCount = Math.max(map[curr], maxCount);
    return acc + map[curr];
  }, 0);
  return totalCount - maxCount <= k;
}

function longestRepeatingCharacter(s, k) {
  let i = 0,
    j = 0,
    max = 0;
  let map = {};
  map[s[0]] = 1;

  while (j < s.length) {
    // check if window is correct
    if (isValidWindow(map, k)) {
      max = Math.max(max, j - i + 1);
      j++;
      // add to map
      map[s[j]] = map[s[j]] ? map[s[j]] + 1 : 1;
    } else {
      // remove from map
      map[s[i]] = map[s[i]] - 1;
      if (map[s[i]] === 0) {
        delete map[s[i]];
      }
      i++;
    }
  }

  return max;
}

console.log(longestRepeatingCharacter("ABAB", 2)); // 4
// console.log(longestRepeatingCharacter("AABABBA", 1));
