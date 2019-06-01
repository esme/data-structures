var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};




// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = []; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   var index = this._storage.indexOf(item);
//   if(index === -1) {
//     this._storage.push(item);
//   }
// };

// setPrototype.contains = function(item) {
//   var index = this._storage.indexOf(item);
//   if(index !== -1) {
//     return true;
//   } else return false;
// };

// setPrototype.remove = function(item) {
//   var index = this._storage.indexOf(item);
//   delete this._storage[index];
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * constant
 */

