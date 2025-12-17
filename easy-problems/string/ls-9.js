// 1903. Largest Odd Number in String

function largestOddNumber(s) {
  if (parseInt(s) % 2 !== 0) return s;

  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 === 1) {
      return s.slice(0, i + 1);
    }
  }

  return "";
}

console.log(largestOddNumber("52")); // "5"
console.log(largestOddNumber("4206")); // ""
console.log(largestOddNumber("35427")); // "35427"
