const {
  BinarySearchTree,
  Node
} = require("../binary-search-tree/binary-search-tree");

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = undefined;
    this.balanceFactor = {
      UNBALANCED_LEFT: 2,
      SLIGHTLY_UNBALANCED_LEFT: 1,
      BALANCED: 0,
      SLIGHTLY_UNBALANCED_RIGHT: -1,
      UNBALANCED_RIGHT: -2
    };
  }

  getHeight() {
    return this.getNodeHeight(this.root);
  }

  getNodeHeight(node) {
    if (node === undefined) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor() {
    return this.getNodeBalanceFactor(this.root);
  }

  getNodeBalanceFactor(node) {
    let heightDiff =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDiff) {
      case 2:
        return this.balanceFactor.UNBALANCED_LEFT;
      case 1:
        return this.balanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      default:
        return this.balanceFactor.BALANCED;
      case -1:
        return this.balanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case -2:
        return this.balanceFactor.UNBALANCED_RIGHT;
    }
  }

  rotateRR() {
    this.root = this.rotateNodeRR(this.root);
  }

  rotateNodeRR(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  rotateLL() {
    this.root = this.rotateNodeLL(this.root);
  }
  rotateNodeLL(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotateLR() {
    this.root = this.rotateNodeLR(this.root);
  }

  rotateNodeLR(node) {
    node.left = this.rotateNodeLL(node.left);
    return this.rotateNodeRR(node);
  }
  rotateRL() {
    this.root = this.rotateNodeRL(this.root);
  }

  rotateNodeRL(node) {
    node.right = this.rotateNodeRR(node.right);
    return this.rotateNodeLL(node);
  }

  AVLInsert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertAVLNode(this.root, key);
    }
  }

  insertAVLNode(node, key) {
    // first insert the value into the tree
    if (key < node.value) {
      if (node.left === undefined) {
        node.left = new Node(key);
      } else {
        this.insertAVLNode(node.left, key);
      }
    } else if (key > node.value) {
      if (node.right === undefined) {
        node.right = new Node(key);
      } else {
        this.insertAVLNode(node.right, key);
      }
    }
    // once inserted, evaluate whether a rotation is needed
    if (this.getBalanceFactor() === this.balanceFactor.UNBALANCED_LEFT) {
      this.rotateRR();
    } else if (
      this.getBalanceFactor() === this.balanceFactor.UNBALANCED_RIGHT
    ) {
      this.rotateLL();
    }
  }
}

module.exports = { AVLTree };
