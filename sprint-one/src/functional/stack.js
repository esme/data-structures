var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var len = Object.keys(storage).length;
    storage[len] = value;
  };

  someInstance.pop = function() {
    var len = Object.keys(storage).length;
    var item = storage[len - 1];
    delete storage[len - 1];
    return item;
  };

  someInstance.size = function() {
    var len = Object.keys(storage).length;
    return len;
  };

  return someInstance;
};
