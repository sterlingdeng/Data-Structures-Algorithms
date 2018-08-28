const { COMPARE, compareFunction } = require("../../../helper");

class Node {
  constructor(value = null) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class BinarySearchTree {
  constructor(compare = compareFunction) {
    this.root = undefined;
    this.compare = compare;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(key, this.root);
    }
  }

  insertNode(key, node) {
    if (this.compare(key, node.value) === -1) {
      if (node.left === undefined) {
        const newNode = new Node(key);
        node.left = newNode;
      } else {
        this.insertNode(key, node.left);
      }
    } else if (this.compare(key, node.value) === 1) {
      if (node.right === undefined) {
        const newNode = new Node(key);
        node.right = newNode;
      } else {
        this.insertNode(key, node.right);
      }
    } else {
      return false;
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== undefined) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.value);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== undefined) {
      callback(node.value);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node !== undefined) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.value);
    }
  }

  returnLowest() {
    return this.returnLowestNode(this.root);
  }

  returnLowestNode(node) {
    if (node.left === undefined) {
      return node.value;
    }
    return this.returnLowestNode(node.left);
  }

  returnGreatest() {
    return this.returnGreatestNode(this.root);
  }

  returnGreatestNode(node) {
    if (node.right === undefined) {
      return node.value;
    }
    return this.returnGreatestNode(node.right);
  }
}

const newTree = new BinarySearchTree();
newTree.insert(10);
newTree.insert(5);
newTree.insert(6);
newTree.insert(4);
newTree.insert(20);
newTree.insert(15);
newTree.insert(116);
newTree.insert(12);
newTree.insert(11);
console.log(newTree.returnLowest());
console.log(newTree.returnGreatest());

module.exports = { Node, BinarySearchTree };
