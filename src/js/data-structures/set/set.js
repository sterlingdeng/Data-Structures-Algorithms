class Set {
  constructor(values = null) {
    this.items = {};
    this.add(values);
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!element) {
      return false;
    }
    if (typeof element === "object") {
      element.forEach(value => {
        this.add(value);
      });
    } else {
      if (!this.has(element)) {
        this.items[element] = element;
      }
    }
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
    let setA = this.values();
    let setB = otherSet.values();
    return new Set([...setA, ...setB]);
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

let set = new Set();
let set2 = new Set();
set.add(1);
set.add(2);
set.add(3);
set2.add("a");
set2.add("b");
set2.add("c");
set2.add(1);
let unionSet = set.union(set2);
console.log(unionSet.values());
module.exports = Set;
