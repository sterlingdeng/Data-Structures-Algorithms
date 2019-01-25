function mergeSort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);

    arr = merge(mergeSort(left), mergeSort(right));
  }

  return arr;
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    let min = null;
    if (left[0] < right[0]) {
      min = left.shift();
    } else {
      min = right.shift();
    }
    result.push(min);
  }

  if (left.length) {
    result = result.concat(left);
  }

  if (right.length) {
    result = result.concat(right);
  }

  return result;
}

console.log(mergeSort([5, 4, 3, 2, 1]));
