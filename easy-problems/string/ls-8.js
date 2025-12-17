// 125. Valid Palindrome

function isValidPalindrome(s) {
  s = s.toLowerCase();

  let filterString = "";

  for (let char of s) {
    if (char.match(/[a-z0-9]/i)) {
      filterString = filterString + char;
    }
  }

  for (let i = 0; i < Math.floor(filterString.length / 2); i++) {
    if (filterString[i] !== filterString[filterString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
