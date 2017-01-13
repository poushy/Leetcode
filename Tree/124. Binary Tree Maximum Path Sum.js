/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if(root == null) {
        return 0;
    }
    var maxVal = root.val;
    function findMaxPath (curr) {
        if(curr == null) {
            return 0;
        }
        var currVal = curr.val,
            leftVal = findMaxPath(curr.left),
            rightVal = findMaxPath(curr.right);
            
        if(currVal + leftVal + rightVal > maxVal) {
            maxVal = currVal + leftVal + rightVal;
        }
        if(currVal + leftVal > maxVal) {
            maxVal = currVal + leftVal;
        }
        if(currVal + rightVal > maxVal) {
             maxVal = currVal + rightVal;
        }
        
        
        if(leftVal > rightVal && currVal < currVal + leftVal) {
            return currVal + leftVal;
        }
        else if(currVal < currVal + rightVal){
            return currVal + rightVal;
        }else {
            return currVal;
        }
    }
    findMaxPath(root);
    return maxVal;
};
