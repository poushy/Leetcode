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
var sumNumbers = function(root) {
    var sum = 0;
    function findSum(curr,currStack) {
        if(curr == null){
            return;
        }
        currStack.push(curr.val);
        if(curr.left == null && curr.right == null) {
            sum += Number(currStack.join(''));
        }
        findSum(curr.left, currStack);
        findSum(curr.right, currStack);
        currStack.pop();
    }
    findSum(root,[]);
    return sum;
};
