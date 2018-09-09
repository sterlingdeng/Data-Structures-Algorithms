const chai = require("chai");
const { AVLTree } = require("../avl-tree");
const expect = chai.expect;

describe("avl-tree test", () => {
  let avl;

  it("should test in order traversal", () => {
    let arr = [];
    avl = new AVLTree();
    avl.insert(50);
    avl.insert(30);
    avl.insert(70);
    avl.insert(10);
    avl.insert(40);
    avl.insert(5);
    avl.inOrderTraverse(e => {
      arr.push(e);
    });
    expect(arr).to.deep.equal([5, 10, 30, 40, 50, 70]);
  });

  it("should test height", () => {
    avl = new AVLTree();
    avl.insert(50);
    avl.insert(30);
    avl.insert(70);
    avl.insert(10);
    avl.insert(40);
    avl.insert(5);
    expect(avl.getHeight()).to.equal(3);
  });

  it("should test LL rotation", () => {
    let arr = [];
    avl = new AVLTree();
    avl.insert(1);
    avl.insert(2);
    avl.insert(3);
    expect(avl.getBalanceFactor()).to.equal(-2);
    avl.rotateLL();
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.preOrderTraverse(e => arr.push(e));
    expect(arr).to.deep.equal([2, 1, 3]);
  });

  it("should test RR rotation", () => {
    let arr = [];
    avl = new AVLTree();
    avl.insert(3);
    avl.insert(2);
    avl.insert(1);
    expect(avl.getBalanceFactor()).to.equal(2);
    avl.rotateRR();
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.preOrderTraverse(e => arr.push(e));
    expect(arr).to.deep.equal([2, 1, 3]);
  });

  it("should test LR rotation", () => {
    let arr = [];
    avl = new AVLTree();
    avl.insert(7);
    avl.insert(4);
    avl.insert(5);
    expect(avl.getBalanceFactor()).to.equal(2);
    avl.rotateLR();
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.preOrderTraverse(e => arr.push(e));
    expect(arr).to.deep.equal([5, 4, 7]);
  });

  it("should test RL rotation", () => {
    let arr = [];
    avl = new AVLTree();
    avl.insert(5);
    avl.insert(8);
    avl.insert(7);
    expect(avl.getBalanceFactor()).to.equal(-2);
    avl.rotateRL();
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.preOrderTraverse(e => arr.push(e));
    expect(arr).to.deep.equal([7, 5, 8]);
  });

  it("should test avl insert", () => {
    avl = new AVLTree();

    avl.AVLInsert(5);
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.AVLInsert(4);
    expect(avl.getBalanceFactor()).to.equal(1);
    avl.AVLInsert(3);
    expect(avl.getBalanceFactor()).to.equal(0);
    avl.AVLInsert(2);
    expect(avl.getBalanceFactor()).to.equal(1);
    avl.AVLInsert(1);
    expect(avl.getBalanceFactor()).to.equal(0);
  });
  it("should test avl insert 2", () => {
    let arr = [];
    avl = new AVLTree();
    avl.AVLInsert(50);
    avl.AVLInsert(30);
    avl.AVLInsert(70);
    avl.AVLInsert(10);
    avl.AVLInsert(40);
    avl.AVLInsert(35);

    avl.preOrderTraverse(e => {
      arr.push(e);
    });
    expect(arr).to.deep.equal([40, 30, 10, 35, 50, 70]);
  });
});
