const chai = require("chai");
const { BinarySearchTree } = require("../binary-search-tree");
const expect = chai.expect;

describe("Stack", () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(6);
    bst.insert(4);
    bst.insert(20);
    bst.insert(15);
    bst.insert(116);
    bst.insert(12);
    bst.insert(11);
  });
  it("should test find min", () => {
    expect(bst.returnLowest()).to.equal(4);
  });
  it("should test find max", () => {
    expect(bst.returnGreatest()).to.equal(116);
  });
  it("should test find value", () => {
    expect(bst.search(4)).to.equal(true);
    expect(bst.search(2)).to.equal(false);
    expect(bst.search(116)).to.equal(true);
    expect(bst.search(999)).to.equal(false);
    expect(bst.search(10)).to.equal(true);
    bst.clear();
    expect(bst.search(10)).to.equal(false);
  });
});
