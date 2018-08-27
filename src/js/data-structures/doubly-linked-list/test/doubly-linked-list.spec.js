const chai = require("chai");
const expect = chai.expect;
const { DoublyNode, DoublyLinkedList } = require("../doubly-linked-list");

describe("doubly-linked-list", () => {
  let doublyLinkedList;
  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });
  it("should test push front", () => {
    doublyLinkedList.pushFront(10);
    expect(doublyLinkedList.head.value).to.equal(10);
    doublyLinkedList.pushFront(30);
    expect(doublyLinkedList.head.value).to.equal(30);
    expect(doublyLinkedList.size()).to.equal(2);
  });
  it("should test push back", () => {
    doublyLinkedList.pushFront(10);
    doublyLinkedList.pushFront(30);
    doublyLinkedList.pushBack(40);
    expect(doublyLinkedList.indexOf(3)).to.equal(-1);
    expect(doublyLinkedList.indexOf(40)).to.equal(2);
    doublyLinkedList.pushBack(99);
    expect(doublyLinkedList.indexOf(99)).to.equal(3);
  });
  it("should test insert", () => {
    doublyLinkedList.pushFront(10);
    doublyLinkedList.pushFront(30);
    doublyLinkedList.pushBack(40);
    doublyLinkedList.pushBack(99);
    doublyLinkedList.insert(50, 2);
    expect(doublyLinkedList.indexOf(50)).to.equal(2);
    expect(doublyLinkedList.indexOf(30)).to.equal(0);
    expect(doublyLinkedList.indexOf(40)).to.equal(3);
    expect(doublyLinkedList.insert(50, 10)).to.equal(false);
    doublyLinkedList.insert(75, 0);
    expect(doublyLinkedList.indexOf(75)).to.equal(0);
    expect(doublyLinkedList.indexOf(30)).to.equal(1);
  });
});
