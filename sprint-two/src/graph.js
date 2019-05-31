

// Instantiate a new graph
var Graph = function() {
    this.nodes = [];
    this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.nodes.push(node);
    this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (this.nodes.indexOf(node) === -1) {
        return false
    } else return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    var index = this.nodes.indexOf(node);
    delete this.nodes[index];

    // This is looping through the edges of the node you just deleted and removing references to said node
    var edge = this.edges[node];
    for(var i = 0; i<edge.length; i++) {
        var connection = edge[i];
        var oldNodeIndex = this.edges[connection].indexOf(node);
        delete this.edges[connection][oldNodeIndex];
    }
    delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    var connected = false;
    if(this.edges[fromNode].indexOf(toNode) !== -1) {
        connected = true;
    }
    return connected;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    var indexFrom = this.edges[fromNode].indexOf(toNode);
    delete this.edges[fromNode][indexFrom];
    var indexTo = this.edges[toNode].indexOf(fromNode);
    delete this.edges[toNode][indexTo];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for(var i = 0; i < this.nodes.length; i++) {
        cb(this.nodes[i]);
    }
};


var graph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


