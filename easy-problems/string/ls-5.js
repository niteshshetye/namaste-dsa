//  Find Most Frequent Vowel and Consonant

let vowels = new Set(["a", "e", "i", "o", "u"]);

function findMostFrequentVowelAndConsonant(s) {
  let vowelFrequency = {};
  let consonantFrequency = {};

  for (let char of s) {
    if (vowels.has(char)) {
      vowelFrequency[char] ? vowelFrequency[char]++ : 1;
    } else {
      consonantFrequency[char] ? consonantFrequency[char]++ : 1;
    }
  }

  let vowelCount = 0;
  let consonantCount = 0;

  for (let vowel in vowelFrequency) {
    vowelCount = Math.max(vowelCount, vowelFrequency[vowel]);
  }

  for (let consonant in consonantFrequency) {
    consonantCount = Math.max(consonantCount, consonantFrequency[consonant]);
  }

  return vowelCount + consonantCount;
}

console.log(findMostFrequentVowelAndConsonant("successes"));
