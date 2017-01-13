/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    var trav = [root], currCount = 0;
    
    function ifSum(curr,currSum) {
        if(curr == null) {
            return;
        }
        if(currSum + curr.val == sum) {
            currCount++;
        }    
        ifSum(curr.left, currSum + curr.val);
        ifSum(curr.right, currSum + curr.val);
        
    }
    
    while(trav.length > 0) {
        var curr = trav.pop();
        if(curr) {
            if(curr.left) {
                trav.push(curr.left);
            }
            if(curr.right) {
                trav.push(curr.right);
            }
            ifSum(curr,0);
        }
    }
    
    return currCount;
};
