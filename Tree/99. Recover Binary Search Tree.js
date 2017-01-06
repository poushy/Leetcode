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
var recoverTree = function(root) {
    var node1,node2,temp,prev, arr = [];
    
    function findNodes(curr) {
        if(curr == null) {
            return;
        }
        findNodes(curr.left);
       arr.push(curr);
        findNodes(curr.right);
    }
    
    
    findNodes(root);
    for(var i=0; i< arr.length; i++) {
        if(!((i==0 || arr[i-1].val < arr[i].val) && (i == arr.length - 1 || arr[i].val < arr[i+1].val))) {
            if(!node1) {
                node1 = arr[i];
            }
            else {
                node2 = arr[i];
            }
        }
    }
    if(node2 == null) {
        node2 = root;
    }
    
        
    temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
    
};