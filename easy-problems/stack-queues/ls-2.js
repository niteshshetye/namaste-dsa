class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s1.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    // If s2 is empty then move all element from s1 to s2
    if (this.s2.length === 0) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    // Then pop from s2
    return this.s2.pop();
  }
  /**
   * @return {number}
   */
  peek() {
    // If s2 is empty then move all element from s1 to s2
    if (this.s2.length === 0) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    // Then return top element from s2
    return this.s2[this.s2.length - 1];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

// const queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// console.log(queue.pop()); // 1
// console.log(queue.pop()); // 2
// queue.push(5);
// queue.push(6);
// console.log(queue.peek()); // 3
// console.log(queue.pop()); // 3
// console.log(queue.pop()); // 4
// console.log(queue.pop()); // 5
// console.log(queue.empty()); // false
// console.log(queue.pop()); // 6
// console.log(queue.empty()); // true

let obj = {
  name: "Object",
  print: function () {
    const print2 = () => {
      console.log(this.name);
    };

    print2();
  },
};

let obj2 = {
  name: "Object 2",
};

obj.print.call(obj2);
