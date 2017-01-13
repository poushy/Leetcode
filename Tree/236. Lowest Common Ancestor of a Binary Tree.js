/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var found1,currStack = [],found;
    function findLCA(curr) {
        if(curr == null || found) {
            return;
        }
        currStack.push(curr);
        if(!found1 && (curr == p || curr == q)) {
            found1 = currStack.slice();
        }
        else if(curr == p || curr == q) {
            var i = 0;
            while(i < currStack.length || i<found1.length) {
                if(i== currStack.length|| i == found1.length ||currStack[i] != found1[i]) {
                    found = currStack[i-1];
                    return;
                }
                i++;
            }
        }
        findLCA(curr.left);
        findLCA(curr.right);
        currStack.pop();
    }
    findLCA(root);
    return found;
};
