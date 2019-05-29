var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var len = Object.keys(this.storage).length;
  this.storage[len] = value;
};

Queue.prototype.dequeue = function() {
  var len = Object.keys(this.storage).length;
  var item = this.storage[0];
  for (var i = 0; i < len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len - 1];
  return item;
};

Queue.prototype.size = function() {
  var len = Object.keys(this.storage).length;
  return len;
};
