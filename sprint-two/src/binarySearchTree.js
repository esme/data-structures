var BinarySearchTree = function(value) {
    var newTree = {}
    newTree.value = value;
    newTree.left = null;
    newTree.right = null;

  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
    // check if value is left or right of parent node
    // make sure that there is 1 or less child of each node
    if (this.left === null && value < this.value) {
        var leftTree = BinarySearchTree(value);
        this.left = leftTree;
    } else if (this.right === null && value > this.value) {
        var rightTree = BinarySearchTree(value);
        this.right = rightTree;
    } else if (this.left !== null) {
        this.left.insert(value);
    } else if (this.right !== null) {
        this.right.insert(value);
    }

}


binaryTreeMethods.contains = function(value) {

}


binaryTreeMethods.depthFirstLog = function() {

}
/*
 * Complexity: What is the time complexity of the above functions?
 */


