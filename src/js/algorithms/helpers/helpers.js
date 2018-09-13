function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

module.exports = { swap };
