class Node {
  constructor(value = undefined) {
    this.value = value;
    this.next = undefined;
  }
}

/**
 * Implement the following methods:
 * pushFront
 * pushBack
 * insert
 * getElementAt
 * isEmpty()
 * indexOf
 * size()
 * removeAt
 * remove
 * toString()
 */

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  pushFront(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.count++;
  }

  pushBack(value) {
    let node = new Node(value);

    if (this.count === 0) {
      this.head = node;
      this.count++;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== undefined) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
      this.count++;
    }
  }

  insert(value, position) {
    if (position < 0) return "positive position only";
    if (position > this.count)
      return "insert position is outside the size of the list";
    if (this.size() === 0 || position === 0) {
      this.pushFront(value);
      return;
    }
    if (position === this.count) {
      this.pushBack(value);
      return;
    }

    let newNode = new Node(value);
    let currNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.count++;
  }

  getElementAt(index) {
    if (typeof index !== "number") return "type error";

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.value;
  }

  isEmpty() {
    return this.count === 0;
  }

  indexOf(val) {
    let current = this.head;
    let index = 0;
    while (current.value !== val) {
      if (current.next === undefined) return -1;
      current = current.next;
      index++;
    }
    return index;
  }
  size() {
    return this.count;
  }

  removeAt(position) {
    if (position < 0 || position > this.size()) {
      return undefined;
    }
    let index = 0;
    let currentNode = this.head;
    let prevNode;
    for (index; index < position; index++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    this.count--;
  }

  remove(value) {
    let index = this.indexOf(value);
    this.removeAt(index);
    this.count--;
  }

  toString() {
    let currNode = this.head;
    let stringObj = `${currNode.value}`;
    while (currNode.next !== undefined) {
      currNode = currNode.next;
      stringObj += `,${currNode.value}`;
    }
    return stringObj;
  }
}

linkedList = new LinkedList();
linkedList.insert(10, 0);
linkedList.insert(20, 1);
linkedList.insert(30, 1);
console.log(linkedList.toString());

module.exports = { Node, LinkedList };
