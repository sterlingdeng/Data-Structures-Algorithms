/**
 *  The following is an implementation of a Stack datastucture using objects, rather than
 *  an array.
 *
 *  push()       method adds a new element to the top of the stack
 *  pop()        removes the top element from the stack
 *  peek()       returns the top element of the stack. stack is not modified
 *  isEmpty()    returns  true if stack does not contain elements
 *  clear()      removes all elements from the stack
 *  size()       returns the number of elements that the stack contains
 *  toString()   converts the items to string, joined by a comma
 *
 */

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
