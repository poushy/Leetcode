/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var arr = [], bfs = [];
    
    function traverse(curr) {
        if(curr == null) {
            return;
        }
        
        var temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
        
        traverse(curr.left);
        traverse(curr.right);
    }
        
    traverse(root);
    return root;
};
