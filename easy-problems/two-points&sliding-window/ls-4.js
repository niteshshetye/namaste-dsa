//  Find the Index of the First Occurrence in a String

function findFirstOccurrence(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === m) {
      return i;
    }
  }

  return -1;
}

console.log(findFirstOccurrence("sadbutsad", "sad"));
console.log(findFirstOccurrence("leetcode", "leeto"));
