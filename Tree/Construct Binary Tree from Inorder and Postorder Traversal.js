/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var currentIndex = postorder.length - 1, treeTop = null;
    
    function createTree(node,start,end, dir) {
        var mid;
        if(start >end) {
            return;
        }
        for(var i=start; i<=end; i++) {
            if(inorder[i] == postorder[currentIndex]) {
                currentIndex --;
                mid = i;
                break;
            }
        }
        var currNode = new TreeNode(inorder[mid]);
        if(treeTop == null) {
            treeTop = currNode;
        }
        else {
            node[dir] = currNode;
        }
         createTree(currNode,mid +1, end, 'right');
        createTree(currNode,start,mid -1, 'left');
    }
    
    createTree(null, 0, inorder.length -1, null);
    return treeTop;
};
