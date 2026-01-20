// Implement Stack using Queues

class Stack {
  constructor() {
    this.q1 = [];
  }

  push(x) {
    this.q1.push(x);
  }

  pop() {
    let n = this.q1.length - 1;

    // Deque and push in q2 till last element but not last
    for (let i = 0; i < n; i++) {
      this.push(this.q1.shift());
    }

    // Deque remaining last element from q1;
    return this.q1.shift();
  }

  top() {
    // pop last element
    let lastEle = this.pop();
    // push last element again
    this.push(lastEle);

    return lastEle;
  }

  empty() {
    return this.q1.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.empty());
