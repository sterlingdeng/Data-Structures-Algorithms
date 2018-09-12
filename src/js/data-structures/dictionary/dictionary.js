// implement
/* 
  set(key,value)
  remove(key)
  hasKey(key)
  get(key)
  clear()
  size()
  isEmpty()
  keys()
  values()

*/

class Dictionary {
  constructor() {
    this.table = {};
  }

  set(key, value) {
    if (key !== null && value !== null) {
      const stringKey = this.toString(key);
      this.table[stringKey] = new ValuePair(key, value);
    }
    return false;
  }

  remove(key) {
    if (key !== null) {
      delete this.table[this.toString(key)];
      return true;
    }
    return false;
  }

  hasKey(key) {
    if (key !== null) {
      return this.table.hasOwnProperty(this.toString(key));
    }
    return false;
  }

  get(key) {
    if (key !== null && this.hasKey(key)) {
      return this.table[this.toString(key)];
    }
  }

  isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  keys() {
    return Object.keys(this.table);
  }

  values() {
    const values = [];
    Object.values(this.table).forEach(valuePair => {
      values.push(valuePair.value);
    });
    return values;
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  forEach(callback) {
    // callback(key, value)
    if (this.isEmpty()) {
      return false;
    }

    const values = this.value();

    for (let i = 0; i < values.length; i++) {
      callback(values[i].key, values[i].value);
    }
  }

  toString(value) {
    if (typeof value !== "string") {
      return `${value}`;
    }
    return value;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${key}: ${value}]`;
  }
}

module.exports = { Dictionary };
