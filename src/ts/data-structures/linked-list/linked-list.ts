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

class llNode {
  public value: any;
  public next: llNode;
  public prev: llNode;
  constructor(value: any) {
    this.value = value;
    this.next;
    this.prev;
  }
}

class LinkedList {
  public head: llNode;
  public length: number;
  constructor() {
    this.length = 0;
    this.head;
  }

  public pushFront(value: any): void {
    const node: llNode = new llNode(value);
    node.next = this.head;
    this.head = node;
    this.length += 1;
  }

  public pushBack(value: any): void {
    if (this.length === 0) {
      this.pushFront(value);
      this.length += 1;
      return;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    const node: llNode = new llNode(value);
    currNode.next = node;
    this.length += 1;
  }

  public insert(value: any, position: number): void {
    if (position < 0) return undefined;
    if (position === 0) this.pushFront(value);
    if (position === this.length) this.pushBack(value);
    if (position > this.length) return undefined;

    let currNode: llNode = this.head;
    let newNode: llNode = new llNode(value);

    for (let i = 0; i < position - 1; i += 1) {
      currNode = currNode.next;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length += 1;
  }

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public getElementAt(idx: number): any {
    if (this.isEmpty()) return null;
    let currNode: llNode = this.head;
    for (let i = 0; i < idx; i += 1) {
      currNode = currNode.next;
    }
    return currNode.value;
  }

  public indexOf(val: any): number {
    let idx: number = 0;
    let currNode: llNode = this.head;
    while (idx < this.length) {
      if (currNode.value === val) {
        return idx;
      }
      idx += 1;
    }
    return undefined;
  }
  // 0 - 1 - 2 - 3 - 4 - 5   remove at 3
  public removeAt(idx: number) {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }
    let currNode: llNode = this.head;
    let prevNode: llNode;

    for (let i = 0; i < idx; i += 1) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = currNode.next;
    this.length -= 1;
  }

  public remove(val: any): void {
    const idx = this.indexOf(val);
    this.removeAt(idx);
    this.length -= 1;
  }
}

export = { llNode, LinkedList };
