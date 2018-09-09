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

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    // base case conditions
    if (node === undefined) return false;
    if (node.value === key) return true;

    if (compareFunction(key, node.value) === 1) {
      return this.searchNode(node.right, key);
    } else if (compareFunction(key, node.value) === -1) {
      return this.searchNode(node.left, key);
    }
    return false;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    // Scenario 0 : if node is not found
    if (node === undefined) return undefined;

    if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (node.value === key) {
      // Scenario 1 : if not does not have children
      if (node.left === undefined && node.right === undefined) {
        node = undefined;
        return node;
      }
      // Scenario 2 : if it has 1 child node, left or right

      if (node.left === undefined) {
        return node.right;
      } else if (node.right === undefined) {
        return node.left;
      }

      // Scenario 3 : if node has 2 children, find the lowest value in that subtree to replace
      if (node.left !== undefined && node.right !== undefined) {
        let temp = this.returnLowestNode(node.right);
        node.value = temp;
        node.right = this.removeNode(node.right, temp);
        return node;
      }
    }
    return node;
  }

  clear() {
    this.root = undefined;
  }
}

module.exports = { BinarySearchTree, Node };
