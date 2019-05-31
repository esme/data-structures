

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // use get function to check if htere is a value at the storage index index we are operating on
  // if there is no value, put in a new array with index 0 = [k, v] 
  // else if there is a value, 
    // check if the key is already in the array
      // if yes, replace old value with new value
      // if not, push [k, v] to the array that is this._storage[index]
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k,v]]);
  } else {
    var keyAlreadyExists = false;
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
        keyAlreadyExists = true;
      }
    }
    if(!keyAlreadyExists) {
      this._storage.get(index).push([k,v]);
    }
  }
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  } else return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      delete this._storage.get(index)[i][0];
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


