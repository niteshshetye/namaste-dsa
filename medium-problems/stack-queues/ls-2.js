// 150. Evaluate Reverse Polish Notation (medium    )
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

let ariathMaticExpression = ["+", "-", "*", "/"];

function evalRPN(expressArray) {
  let stack = [];

  for (let i = 0; i < expressArray.length; i++) {
    let curr = expressArray[i];

    let isNumber = !ariathMaticExpression.includes(curr);

    if (isNumber) {
      stack.push(Number(curr));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let ans = eval(`${b} ${curr} ${a}`);

      stack.push(Math.trunc(ans));
    }
  }

  return +stack.pop();
}

console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10"]));
