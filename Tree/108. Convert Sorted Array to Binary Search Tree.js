/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var treeTop = null;
   
    function createTree(start, end, curr, dir) {
        if(start > end) {
            return;
        }
        var mid = start + Math.floor((end - start)/2);
        console.log(mid);
        var newNode = new TreeNode(nums[mid]);
        if(treeTop == null) {
            treeTop = newNode;
        }
        else if(dir == 'left') {
            curr.left = newNode;
        }
        else {
            curr.right = newNode;
        }
        createTree(start, mid - 1, newNode, 'left');
        createTree(mid + 1, end, newNode, 'right');
    }
     createTree(0,nums.length-1,null, null);
    return treeTop;
};
