const { LinkedList, Node } = require("../linked-list/linked-list");

class DoublyNode extends Node {
  constructor(value) {
    super(value);
    this.prev = undefined;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  insert(value, position) {
    if (position < 0) return false;
    if (position > this.count) return false;
    if (this.size() === 0 || position === 0) {
      this.pushFront(value);
      return;
    }
    if (position === this.count) {
      this.pushBack(value);
      return;
    }

    let newNode = new DoublyNode(value);
    let currNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    newNode.prev = currNode;
    newNode.next.prev = newNode;
    currNode.next = newNode;

    this.count++;
  }

  pushFront(value) {
    let newNode = new DoublyNode(value);
    if (this.size() === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.count++;
  }

  pushBack(value) {
    let newNode = new DoublyNode(value);

    if (this.size() === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== undefined) {
        lastNode = lastNode.next;
      }
      newNode.prev = lastNode;
      lastNode.next = newNode;
    }
    this.count++;
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
    currentNode.next.prev = prevNode;
    this.count--;
  }
}

module.exports = { DoublyNode, DoublyLinkedList };
