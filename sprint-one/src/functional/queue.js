var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var len = Object.keys(storage).length;
    storage[len] = value;
  };

  someInstance.dequeue = function() {
    // console.log("before", storage)
    var item = storage[0];
    var len = Object.keys(storage).length;
    for (var i = 0; i < len - 1; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[len - 1];
    // console.log("after", storage)
    return item;
  };

  someInstance.size = function() {
    var len = Object.keys(storage).length;
    return len;
  };

  return someInstance;
};
