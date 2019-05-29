var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var len = Object.keys(this.storage).length;
  this.storage[len] = value;
};

queueMethods.dequeue = function() {
  var len = Object.keys(this.storage).length;
  var item = this.storage[0];
  for (var i = 0; i < len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len - 1];
  return item;
};

queueMethods.size = function() {
  var len = Object.keys(this.storage).length;
  return len;
};