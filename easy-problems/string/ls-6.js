// 1221. Split a String in Balanced Strings

function balancedStringSplit(s) {
  let balance = 0;
  let temp = 0;

  for (let char of s) {
    char === "R" ? ++temp : --temp;

    if (temp == 0) {
      balance++;
    }
  }

  return balance;
}
