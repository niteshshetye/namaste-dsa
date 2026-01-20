// Min Stack implementation

function MinStack() {
  this.stack = [];
}

MinStack.prototype.push = function (val) {
  let min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
  this.stack.push([val, min]);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function () {
  const [_, min] = this.stack[this.stack.length - 1];
  return min;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
