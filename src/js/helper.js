function compareFunction(a, b) {
  if (a === b) {
    return COMPARE.equal;
  }
  return a > b ? COMPARE.greaterThan : COMPARE.lessThan;
}

const COMPARE = {
  equal: 0,
  lessThan: -1,
  greaterThan: 1
};

module.exports = { COMPARE, compareFunction };
