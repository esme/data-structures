var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value)
    if (list.tail !== null) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    var head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
    var container = false;

    var checkfornext = function(node) {
      if (node.value === target) {
        container = true;
        return;
      }
      if (node.next === null) {
        container = false;
        return;
      } else checkfornext(node.next);
      
    }

    checkfornext(list.head);
    return container;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// O(n)