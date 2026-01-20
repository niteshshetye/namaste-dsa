// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

let map = {
  "(": ")",
};

function removeOuterParentheses(str) {
  let result = "";

  let stack = [];

  for (let index in str) {
    const char = str[index];

    if (map[char]) {
      stack.push(char);
      if (stack.length > 1) result += char;
    } else {
      if (stack.length > 1) result += char;
      stack.pop();
    }
  }

  return result;
}

function removeOuterParenthesesWithoutStack(str) {
  let result = "";

  let level = 0;

  for (let i = 0; i < str.length; i++) {
    if (level === 0) {
      level++;
    } else {
      if (str[i] === "(") level++;
      else level--;

      if (level) result += str[i];
    }
  }

  return result;
}

console.log(removeOuterParenthesesWithoutStack("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParenthesesWithoutStack("(()())(())")); // "()()()"
console.log(removeOuterParenthesesWithoutStack("()()")); // ""
