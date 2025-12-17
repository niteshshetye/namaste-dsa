// finds words contaning character (easy)

function includesChar(word, x) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === x) return true;
  }

  return false;
}

function findWordsContaning(words, x) {
  let result = [];

  words.forEach((word, index) => {
    includesChar(word, x) ? result.push(index) : null;
  });

  return result;
}

console.log(findWordsContaning(["hello", "world", "leetcde"], "o"));
