// Valid Parentheses easy problem using stack

function isValidParentheses(str) {
  let parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let char of str) {
    if (!parenthesesMap[char]) {
      const opening = stack.pop();

      if (!opening || parenthesesMap[opening] !== char) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

isValidParentheses("({[]})"); // true
isValidParentheses("({[})"); // false
