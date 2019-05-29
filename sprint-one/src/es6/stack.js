class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var len = Object.keys(this.storage).length;
    this.storage[len] = value;
  }

  pop() {
    var len = Object.keys(this.storage).length;
    var item = this.storage[len - 1];
    delete this.storage[len - 1];
    return item;
  }

  size() {
    var len = Object.keys(this.storage).length;
    return len;
  }
}

var newInstance = new Stack();