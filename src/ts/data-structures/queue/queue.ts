class Queue {
  items: object;
  head: number;
  tail: number;
  constructor() {
    this.items = {};
    this.head = 0; // head index references data
    this.tail = 0; // tail index references spot available for data
  }

  size(): number {
    return this.tail - this.head;
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }

  clear(): void {
    this.head = 0;
    this.tail = 0;
    this.items = {};
  }

  peek(): any {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  queue(value: number) {
    this.items[this.tail] = value;
    this.tail += 1;
  }

  dequeue(): any {
    if (this.isEmpty()) return undefined;

    const dequeued = this.items[this.head];
    delete this.items[this.head];
    this.head += 1;
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    }
    return dequeued;
  }
}
