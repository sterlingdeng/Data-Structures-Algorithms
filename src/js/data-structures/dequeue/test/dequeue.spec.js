const Dequeue = require("../dequeue.js");
const chai = require("chai");
const expect = chai.expect;

describe("Deqeue", () => {
  let dequeue;
  beforeEach(() => {
    dequeue = new Dequeue();
  });

  it("should create an empty dequeue", () => {
    expect(dequeue.isEmpty()).to.equal(true);
    expect(dequeue.size()).to.equal(0);
  });

  it("queue and dequeue elements", () => {
    dequeue.addBack(4);
    expect(dequeue.size()).to.equal(1);
    expect(dequeue.peekBack()).to.equal(4);
    let value = dequeue.removeBack();
    expect(value).to.equal(4);
    expect(dequeue.removeBack()).to.equal(undefined);
  });
  it("addFront and addBack", () => {
    dequeue.addBack(1);
    dequeue.addBack(2);
    dequeue.addBack(3);
    dequeue.addFront("a");
    dequeue.addFront("b");
    expect(dequeue.size()).to.equal(5);
    expect(dequeue.removeFront()).to.equal("b");
    expect(dequeue.removeBack()).to.equal(3);
    expect(dequeue.toString()).to.equal("a,1,2");
    dequeue.clear();
    expect(dequeue.size()).to.equal(0);
  });
});
