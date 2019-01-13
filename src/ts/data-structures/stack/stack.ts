class Stack {
  stack: object;
  count: number;
  constructor() {
    this.count = 0;
    this.stack = {};
  }

  push(value: any): void {
    this.stack[this.count] = value;
    this.count += 1;
  }

  pop(): any {
    if (this.isEmpty()) return undefined;

    const popped = this.stack[this.count];
    delete this.stack[this.count];
    this.count -= 1;
    return popped;
  }

  peek(): any {
    return this.stack[this.count - 1];
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.stack = {};
    this.count = 0;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}
