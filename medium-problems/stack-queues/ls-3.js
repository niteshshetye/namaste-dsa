// Daily Tempratures
// leetcode: https://leetcode.com/problems/daily-temperatures/

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

function dailyTemperatures(temp) {
  let n = temp.length,
    ans = [],
    stack = [];

  for (let i = n - 1; i >= 0; i--) {
    // iterate through the stack and check if the
    while (stack.length) {
      // current temp is less than the temp at the top of the stack then we have found the next greater temp for the current index
      if (temp[stack[stack.length - 1]] > temp[i]) {
        ans[i] = stack[stack.length - 1] - i;
        break;
      } else {
        stack.pop();
      }
    }

    // check if stack length is 0 then break here with 0;
    if (!stack.length) {
      ans[i] = 0;
    }

    // push the current index in stack
    stack.push(i);
  }

  return ans;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
