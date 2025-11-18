/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let withoutSpaceString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      console.log(s[i]);
      withoutSpaceString += s[i].toLowerCase();
    }
  }
};

const value = isPalindrome("A man, a plan, a canal: Panama");
