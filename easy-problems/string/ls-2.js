// length of last word (easy)

function findLengthOfLastWord(s) {
  let end = s.length - 1;
  for (let i = end; i >= 0; i--) {
    if (s[i] !== " ") {
      end = i;
      break;
    }
  }

  let wordLength = 0;
  for (let i = end; i >= 0; i--) {
    if (s[i] === " ") {
      break;
    }
    wordLength++;
  }

  return wordLength;
}

// Approach 2 In one loop
function findLengthOfLastWord(s) {
  let wordsLength = 0;
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] === " " && wordsLength) {
      break;
    }

    if (s[n] !== " ") {
      wordsLength++;
    }

    --n;
  }

  return wordsLength;
}

console.log(findLengthOfLastWord(" Hi there is moon    "));
