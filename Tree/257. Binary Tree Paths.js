/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var paths = [];
    
    function findPath(curr, currPath) {
        if(curr == null) {
            return;
        }
        currPath.push(curr.val);
        if(curr.left == null && curr.right == null) {
            paths.push(currPath.join('->'));
        }
        else {
            findPath(curr.left, currPath);
            findPath(curr.right, currPath);
        }
        currPath.pop();
        
    }
    findPath(root,[]);
    return paths;
};
