/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations.
The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

write a function that will return all children that have a single parent and no parents
functionfindNodesWithZeroAndOneParents(parentChildPairs) => [[1,2,4], [7,10,5,8]]

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 10]
];

second Part:
Write a function that, for two given individuals in our dataset, 
returns true if and only if they share at least one ancestor.


Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false

*/