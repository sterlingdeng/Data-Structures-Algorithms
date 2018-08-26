const Queue = require("../queue");
const chai = require("chai");
const expect = chai.expect;

describe("Queue", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("should create an empty queue", () => {
    expect(queue.isEmpty()).to.equal(true);
    expect(queue.size()).to.equal(0);
  });

  it("queue and dequeue elements", () => {
    queue.queue(4);
    expect(queue.size()).to.equal(1);
    expect(queue.peek()).to.equal(4);
    let value = queue.dequeue();
    expect(value).to.equal(4);
    expect(queue.dequeue()).to.equal(undefined);
  });

  it("queue and clear", () => {
    queue.queue(1);
    queue.queue(2);
    queue.queue("a");
    queue.queue("b");
    expect(queue.size()).to.equal(4);
    expect(queue.clear().size()).to.equal(0);
  });

  it("to string", () => {
    queue.queue(1);
    queue.queue(2);
    queue.queue(3);
    queue.queue(4);
    expect(queue.toString()).to.equal("1,2,3,4");
  });
});
