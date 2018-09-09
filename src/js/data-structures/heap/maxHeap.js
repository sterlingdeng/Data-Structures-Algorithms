const { MinHeap } = require("./minHeap");

class MaxHeap extends MinHeap {
  constructor() {
    super();
  }

  findMaximum() {
    return this.isEmpty() === true ? undefined : this.heap[0];
  }

  percolateUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      this.heap = this.swap(parent, index, this.heap);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  percolateDown() {
    let index = 0;
    let smallerChildIndex;
    const size = this.size();

    while (this.getLeftChild(index) < size) {
      const left = this.getLeftChild(index);
      const right = this.getRightChild(index);
      if (this.heap[left] > this.heap[right]) {
        smallerChildIndex = left;
      } else {
        smallerChildIndex = right;
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex, this.heap);
        index = smallerChildIndex;
      }
    }
  }
}

module.exports = { MaxHeap };
