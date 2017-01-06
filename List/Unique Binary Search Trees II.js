/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 
function createTrees(start, end) {
    
    var arr = [];
    if(start > end) {
        return null;
    }
    for(var k=start; k<= end; k++) {
        var left = createTrees(start, k-1);
        var right = createTrees(k+1, end);
        
        if(left && right) {
            for(var i = 0; i < left.length; i++) {
                for(var j=0; j< right.length; j++) {
                    var newNode = new TreeNode(k+1);
                    newNode.left = left[i];
                    newNode.right = right[j];
                    arr.push(newNode);
                }
            }
        }
        else if(left) {
            for(var i = 0; i < left.length; i++) {
                var newNode = new TreeNode(k+1);
                newNode.left = left[i];
                newNode.right = null;
                arr.push(newNode);
            }
        }
        else if(right) {
            for(var i = 0; i < right.length; i++) {
                var newNode = new TreeNode(k+1);
                newNode.left = null;
                newNode.right = right[i];
                arr.push(newNode);
            }
        }
        else {
            var newNode = new TreeNode(k+1);
                newNode.left = null;
                newNode.right = null;
                arr.push(newNode);
        }
    }
    return arr;
}

var generateTrees = function(n) {
    return createTrees(0, n-1);
};
