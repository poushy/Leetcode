/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 
var isBalanced = function(root) {
    
    var balanced = true;
    if(root == null) {
        return true;
    }
    function checkHeight(curr) {
        if(balanced == false) {
            return;
        }
        if(curr == null) {
            return 0;
        }
        var leftHeight = checkHeight(curr.left);
        var rightHeight = checkHeight(curr.right);
        
        if(leftHeight > rightHeight + 1 || rightHeight > leftHeight +1) {
            balanced = false;
            return false;
        }
        else {
            return leftHeight > rightHeight ? leftHeight +1 : rightHeight +1;
        }
    }
    checkHeight(root);
    return balanced;
};
