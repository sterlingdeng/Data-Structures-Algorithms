const chai = require("chai");
const expect = chai.expect;
const { Node, LinkedList } = require("../linked-list");

describe("linked-list", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it("should test push front", () => {
    linkedList.pushFront(10);
    expect(linkedList.getElementAt(0)).to.equal(10);
    linkedList.pushFront(20);
    expect(linkedList.getElementAt(1)).to.equal(10);
    expect(linkedList.size()).to.equal(2);
    expect(linkedList.getElementAt(0)).to.equal(20);
  });
  it("should test push back", () => {
    linkedList.pushBack(10);
    expect(linkedList.getElementAt(0)).to.equal(10);
    linkedList.pushBack(20);
    expect(linkedList.getElementAt(1)).to.equal(20);
    expect(linkedList.size()).to.equal(2);
  });
  it("should test indexOf functionality", () => {
    linkedList.pushBack(10);
    expect(linkedList.indexOf(10)).to.equal(0);
    linkedList.pushFront(0);
    expect(linkedList.indexOf(10)).to.equal(1);
    expect(linkedList.indexOf(0)).to.equal(0);
  });
  it("should test insertion functionality", () => {
    expect(linkedList.insert(10, 1)).to.equal(
      "insert position is outside the size of the list"
    );
    expect(linkedList.insert(10, -1)).to.equal("positive position only");
    linkedList.insert(10, 0);
    expect(linkedList.head.value).to.equal(10);
    linkedList.insert(20, 1);
    expect(linkedList.size()).to.equal(2);
    linkedList.insert(30, 1);
    expect(linkedList.indexOf(30)).to.equal(1);
  });

  it("should test removeAt functionality", () => {
    expect(linkedList.insert(10, 1)).to.equal(
      "insert position is outside the size of the list"
    );
    expect(linkedList.insert(10, -1)).to.equal("positive position only");
    linkedList.insert(10, 0);
    expect(linkedList.head.value).to.equal(10);
    linkedList.insert(20, 1);
    expect(linkedList.size()).to.equal(2);
    linkedList.insert(30, 1);
    expect(linkedList.indexOf(30)).to.equal(1);
    linkedList.removeAt(1);
    expect(linkedList.indexOf(30)).to.equal(-1);
    linkedList.remove(20);
    expect(linkedList.indexOf(20)).to.equal(-1);
    expect(linkedList.indexOf(10)).to.equal(0);
  });
  it("should test toString functionality", () => {
    linkedList.insert(10, 0);
    expect(linkedList.toString()).to.equal("10");
    linkedList.insert(20, 1);
    expect(linkedList.toString()).to.equal("10,20");
    linkedList.insert(30, 1);
    expect(linkedList.toString()).to.equal("10,30,20");
  });
});
