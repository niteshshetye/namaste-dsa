// Reverse String II

function swap(s) {
  let n = s.length;
  let mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
}

function reverseString(s, k) {
  s = s.split("");
  let twoK = 2 * k;

  // jump 2k element
  for (let x = 0; x < s.length; x = x + twoK) {
    let mid = Math.floor(k / 2);
    let n = k;

    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - i - 1];
      s[x + n - i - 1] = temp;
    }
  }

  return s.join("");
}

console.log(reverseString("abcdefg", 2));
