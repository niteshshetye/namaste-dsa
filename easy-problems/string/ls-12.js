// 205. Isomorphic Strings

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let wordsMapping = {};
  let mappedWords = {};

  let i = 0;
  while (i < s.length) {
    let sChar = s[i];
    let tChar = t[i];

    if (!wordsMapping[sChar] && !mappedWords[tChar]) {
      wordsMapping[sChar] = tChar;
      mappedWords[tChar] = sChar;
    } else if (
      (wordsMapping[sChar] && wordsMapping[sChar] !== tChar) ||
      (mappedWords[tChar] && mappedWords[tChar] !== sChar)
    ) {
      return false;
    }

    ++i;
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("bar", "foo")); // false
console.log(isIsomorphic("paper", "title")); // true
