/* 
  Bubble Sort
  Average Time complexity: O(n^2) where n is the number of values

*/

const { swap } = require("../helpers/helpers");

// sorts lowest to highest
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(i, j, array);
      }
    }
  }
  return array;
}

module.exports = { bubbleSort };
