/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 function findEnd(curr) {
     while(curr.left != null || curr.right != null) {
         if(curr.left != null) {
             curr = curr.left;
         }
         if(curr.right != null) {
             curr= curr.right;
         }
     }
     return curr;
 }
var flatten = function(root) {
    var linkedList = root;
    
    function flattenTree(curr) {
        if(curr == null) {
            return;
        }
        flattenTree(curr.left);
        flattenTree(curr.right);
        
        var left = curr.left;
        var right = curr.right;
        var leftEnd = findEnd(curr);
        
        if(left !== null) {
            curr.left = null;
            curr.right = left;
            leftEnd.right = right;
        }
    }
    flattenTree(root);
};
