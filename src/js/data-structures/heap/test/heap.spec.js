const chai = require("chai");
const expect = chai.expect;
const { MinHeap } = require("../minHeap");

describe("heap data structure", () => {
  let heap = new MinHeap();
  it("should test insert", () => {
    heap.insert(2);
    heap.insert(4);
    heap.insert(8);
    heap.insert(9);
    heap.insert(7);
    heap.insert(10);
    heap.insert(9);
    heap.insert(15);
    heap.insert(20);
    heap.insert(13);
    heap.insert(9);
    heap.insert(14);
    heap.insert(20);
    heap.insert(11);
    heap.insert(19);
    heap.insert(20);
    heap.insert(17);
    expect(heap.heap).to.deep.equal([
      2,
      4,
      8,
      9,
      7,
      10,
      9,
      15,
      20,
      13,
      9,
      14,
      20,
      11,
      19,
      20,
      17
    ]);
    expect(heap.size()).to.equal(17);
    heap.insert(3);
    expect(heap.size()).to.equal(18);
    // need to insert test for extract function;
  });
});
