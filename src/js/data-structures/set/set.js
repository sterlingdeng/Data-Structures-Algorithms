class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (this.has(element)) {
      return false;
    }
    this.items[element] = element;
  }

  delete(element) {
    if (!this.has(element)) {
      return false;
    }
    delete this.items[element];
    return true;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    let valuesArray = [];
    for (let value in this.items) {
      valuesArray.push(value);
    }
    return valuesArray;
  }

  union(otherSet) {
    let unionSet = new Set();
    this.values().forEach(value => {
      unionSet.add(value);
    });
    otherSet.values().forEach(value => {
      unionSet.add(value);
    });
    return unionSet;
  }

  intersection(otherSet) {
    let intersectedSet = new Set();
    let firstSetArray = this.values();

    firstSetArray.forEach(value => {
      if (otherSet.has(value) === true) {
        intersectedSet.add(value);
      }
    });

    return intersectedSet;
  }

  differences(otherSet) {
    let differenceSet = new Set();
    let thisValues = this.values();
    thisValues.forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    // return true if this.items is a subset of otherSet
    let valueArray = this.values();
    let originalLength = valueArray.length;
    valueArray = valueArray.filter(value => {
      return !otherSet.has(value) ? false : true;
    });
    return valueArray.length === originalLength ? true : false;
  }
}

module.exports = Set;
