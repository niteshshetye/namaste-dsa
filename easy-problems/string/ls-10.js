// 14. Longest Common Prefix

/**
 * strs = [flower, flight, flow]
 *
 */
function longestCommonPrefix(strs) {
  let x = 0;
  while (x < strs[0].length) {
    let commonPrefix = strs[0][x];

    for (let i = 0; i < strs.length; i++) {
      if (commonPrefix !== strs[i][x] || x == strs[i].length) {
        return strs[0].substring(0, x);
      }
    }

    ++x;
  }

  return strs[0];
}

console.log(longestCommonPrefix(["dlower", "floght", "flow"]));
