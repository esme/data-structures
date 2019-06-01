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
    if (value < this.value) {
        if (this.left === null) {
            var leftTree = BinarySearchTree(value);
            this.left = leftTree;
        } else {
            this.left.insert(value);
        }
    }

    if (value > this.value) {
        if (this.right === null) {
            var rightTree = BinarySearchTree(value);
            this.right = rightTree;
        } else {
            this.right.insert(value);
        }
    }
}


binaryTreeMethods.contains = function(value) {
    if (this.value === value) {
        return true;
    }
    if (value < this.value) {
        if (this.left === null) {return false};
        return this.left.contains(value);
    } else if (value > this.value) {
        if (this.right === null) {return false};
        return this.right.contains(value);
    }
    return false;
}


binaryTreeMethods.depthFirstLog = function(func) {
    func(this.value);
    if (this.left !== null) {
        this.left.depthFirstLog(func);
    }
    if (this.right !== null) {
        this.right.depthFirstLog(func);
    }
}
/*
 * Complexity: What is the time complexity of the above functions?
 * log n
 */


