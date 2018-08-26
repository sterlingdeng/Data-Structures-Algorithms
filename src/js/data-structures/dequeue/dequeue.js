class Dequeue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  addFront(value) {
    this.frontIndex--;
    this.items[this.frontIndex] = value;
  }

  addBack(value) {
    this.items[this.backIndex] = value;
    this.backIndex++;
  }

  removeFront() {
    let value = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;

    if (this.frontIndex === this.backIndex) {
      this.frontIndex = 0;
      this.backIndex = 0;
    }

    return value;
  }

  removeBack() {
    this.backIndex--;
    let value = this.items[this.backIndex];
    delete this.items[this.backIndex];

    if (this.frontIndex === this.backIndex) {
      this.frontIndex = 0;
      this.backIndex = 0;
    }
    return value;
  }

  peekFront() {
    return this.items[this.frontIndex];
  }

  peekBack() {
    return this.items[this.backIndex - 1];
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  isEmpty() {
    return this.backIndex === this.frontIndex;
  }

  clear() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let stringObj = this.items[this.frontIndex];
    for (let i = this.frontIndex + 1; i < this.backIndex; i++) {
      stringObj += `,${this.items[i]}`;
    }
    return stringObj;
  }
}

module.exports = Dequeue;
