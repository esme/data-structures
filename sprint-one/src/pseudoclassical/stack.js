var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var len = Object.keys(this.storage).length;
  this.storage[len] = value;
};

Stack.prototype.pop = function() {
  var len = Object.keys(this.storage).length;
  var item = this.storage[len - 1];
  delete this.storage[len - 1];
  return item;
};

Stack.prototype.size = function() {
  var len = Object.keys(this.storage).length;
  return len;
};
