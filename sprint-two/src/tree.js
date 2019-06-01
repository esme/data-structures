var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contains = false;
  if (this.value === target) {
    contains = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      contains = true;
      return contains;
    }
    if(this.children[i].contains(target)) {
      contains = true;
    }
  }
  return contains;
};






/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
 */