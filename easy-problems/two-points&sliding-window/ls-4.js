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

// APPROACH 2 KMP (Knuth-Morris-Pratt) Algorithm
function findFirstOccurrencKmp(haystack, needls) {
  // find lps (largest common prefix which is also suffix)
  let lps = [0],
    i = 0,
    j = 1,
    m = needls.length,
    n = haystack.length;

  while (j < m) {
    if (needls[i] === needls[j]) {
      lps[j] = i + 1;
      ++i;
      ++j;
    } else {
      if (i == 0) {
        lps[j] = 0;
        ++j;
      } else {
        i = lps[i - 1];
      }
    }
  }

  // calculate
  i = 0;
  j = 0;

  while (i < n) {
    if (haystack[i] === needls[j]) {
      ++i;
      ++j;
    } else {
      if (j === 0) {
        ++i;
      } else {
        j = lps[j - 1];
      }
    }

    if (j == m) {
      return i - m;
    }
  }

  return -1;
}

console.log(findFirstOccurrencKmp("sadbutsad", "sad"));
console.log(findFirstOccurrencKmp("onionionsky", "onions"));
console.log(findFirstOccurrencKmp("leetcode", "leeto"));
