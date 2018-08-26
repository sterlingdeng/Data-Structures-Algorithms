class Queue {
  constructor() {
    this.items = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }

  queue(value) {
    this.items[this.lastIndex] = value;
    this.lastIndex++;
  }

  dequeue() {
    if (this.size === 0) return undefined;

    const value = this.items[this.firstIndex];
    delete this.items[this.firstIndex];
    this.firstIndex++;

    if (this.firstIndex === this.lastIndex) {
      this.firstIndex = 0;
      this.lastIndex = 0;
    }

    return value;
  }

  size() {
    return this.lastIndex - this.firstIndex;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.firstIndex];
  }

  clear() {
    this.items = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
    return this;
  }

  isEmpty() {
    return this.firstIndex - this.lastIndex === 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let stringObj = this.items[this.firstIndex];
    for (let i = this.firstIndex + 1; i < this.lastIndex; i++) {
      stringObj += `,${this.items[i]}`;
    }
    return stringObj;
  }
}

module.exports = Queue;
