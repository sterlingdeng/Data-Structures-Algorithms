class MinHeap {
  constructor() {
    this.heap = [];
  }
  /**
   *
   * @param {*} number index of first value to swap
   * @param {*} number index of second value to swap
   * @param {*} array the array
   */
  swap(index1, index2, arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    let returnVal = this.heap.shift();
    let swapLastValue = this.heap.pop();
    this.heap.unshift(swapLastValue);
    this.percolateDown(0);
    return returnVal;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : heap[0];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  percolateUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[parent] > this.heap[index]) {
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
      if (this.heap[left] < this.heap[right]) {
        smallerChildIndex = left;
      } else {
        smallerChildIndex = right;
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex, this.heap);
        index = smallerChildIndex;
      }
    }
  }

  insert(value) {
    this.heap.push(value);
    this.percolateUp(this.heap.length - 1);
  }
}

module.exports = { MinHeap };
