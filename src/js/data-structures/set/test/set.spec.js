const chai = require("chai");
const expect = chai.expect;
const Set = require("../set");

describe("Sets", () => {
  let set;
  beforeEach(() => {
    set = new Set();
  });

  it("should test add", () => {
    set.add("toyota");
    set.add("honda");
    expect(set.items.honda).to.equal("honda");
    expect(set.size()).to.equal(2);
  });
  it("should test set methods", () => {
    set.add(1);
    expect(set.has(1)).to.equal(true);
    expect(set.size()).to.equal(1);
    set.add(2);
    expect(set.has(2)).to.equal(true);
    expect(set.size()).to.equal(2);
  });
  it("should test union", () => {
    let set2 = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set2.add("a");
    set2.add("b");
    set2.add("c");
    set2.add(1);
    let unionSet = set.union(set2);
    expect(unionSet.values()).to.deep.equal(["1", "2", "3", "a", "b", "c"]);
  });
  it("should test intersection", () => {
    let set2 = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set2.add("a");
    set2.add("b");
    set2.add("c");
    set2.add(1);
    let intersectionSet = set.intersection(set2);
    expect(intersectionSet.values()).to.deep.equal(["1"]);
  });
  it("should test differences", () => {
    let set2 = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set2.add("a");
    set2.add("b");
    set2.add("c");
    set2.add(1);
    let differenceSet = set.differences(set2);
    expect(differenceSet.values()).to.deep.equal(["2", "3"]);
    expect(set2.differences(set).values()).to.deep.equal(["a", "b", "c"]);
  });
  it("should test subsets", () => {
    let set2 = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set2.add(1);
    expect(set.subset(set2)).to.equal(false);
    expect(set2.subset(set)).to.equal(true);
  });
});
