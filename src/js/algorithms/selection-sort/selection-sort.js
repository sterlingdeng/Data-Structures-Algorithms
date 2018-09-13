/*
    Selection Sort
    Average Time Complexity : O(n^2) where n is the number of elements
*/

const { swap } = require("../helpers/helpers");

// sorts array from lowest to highest
function selectionSort(array) {
  let lowValIndex;
  for (let i = 0; i < array.length - 1; i++) {
    lowValIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowValIndex]) {
        lowValIndex = j;
      }
    }
    swap(i, lowValIndex, array);
  }
  return array;
}

module.exports = { selectionSort };
