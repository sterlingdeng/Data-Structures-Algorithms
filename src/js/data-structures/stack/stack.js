class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(value) {
    this.items[this.count] = value;
    this.count++;
  }

  pop() {
    // error check if there are any items in the stack
    if (this.count === 0) return undefined;
    this.count--;
    let popped = this.items[this.count];
    delete this.items[this.count];
    return popped;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) return "";

    let stringObject = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      stringObject = `${stringObject},${this.items[i]}`;
    }
    return stringObject;
  }
}

module.exports = Stack;
