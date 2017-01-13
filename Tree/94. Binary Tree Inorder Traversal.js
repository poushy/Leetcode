/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var arr = [];
    
    function traverse(curr) {
        if(curr == null) {
            return;
        }
        traverse(curr.left);
        arr.push(curr.val);
        traverse(curr.right);
    }
        
    traverse(root);
    
    return arr;
    
};
