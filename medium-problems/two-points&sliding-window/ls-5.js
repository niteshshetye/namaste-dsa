// 567. Permutation in String

// s2 = eidbaooo, s1 = ab
function permutation(s1, s2) {
  const hashS = Array(26).fill(0);
  const hashW = Array(26).fill(0);

  let window_size = s1.length;

  for (let i = 0; i < window_size; i++) {
    ++hashW[s1.charCodeAt(i) - 97];
    ++hashS[s2.charCodeAt(i) - 97];
  }

  let i = 0,
    j = window_size - 1;

  while (j < s2.length) {
    if (isHashSame(hashS, hashW)) {
      return true;
    } else {
      --hashS[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashS[s2.charCodeAt(j) - 97];
    }
  }

  return false;
}

function isHashSame(hashS, hashW) {
  for (let i = 0; i < 26; i++) {
    if (hashS[i] !== hashW[i]) {
      return false;
    }
  }

  return true;
}

// console.log(permutation("ab", "eidbaooo")); // true
console.log(permutation("ab", "eidboaoo"));
