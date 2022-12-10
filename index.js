class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    this._error();
    return this.items[this.length - 1];
  }

  min() {
    this._error();
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((sum, elem) => sum += elem);
  }

  avg() {
    this._error();
    return this.sum()/this.length;
  }

  _error() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
