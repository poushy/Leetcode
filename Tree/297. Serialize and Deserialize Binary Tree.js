/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var queue = [], tree = [];
    if(root!= null) {
        queue.push(root);
        while(queue.length > 0) {
            var tempQueue = [];
            while(queue.length > 0) {
                var node = queue[0];
                queue.splice(0,1);
                if(node != null) {
                    tree.push(node.val);
                    tempQueue.push(node.left);
                    tempQueue.push(node.right);
                }
                else {
                    tree.push("#");
                }
            }
            queue = tempQueue;
        }
    }
    
    while(tree[tree.length -1] == '#'){
        tree.pop();
    }
    
    return tree;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var treeTop = null,queue = [];
    if(data.length > 0) {
        for(var i=0; i<data.length; i++) {
            var newNode = (data[i] == '#' ? '#' : new TreeNode(data[i]));
            if(newNode != '#') {
                queue.push(newNode);
            }
            if(treeTop == null) {
                treeTop = newNode;
            }
            else {
                var parent = queue[0];
                if(parent.left == null){
                    parent.left = newNode;
                }
                else {
                    parent.right = newNode;
                    queue.splice(0,1);
                    if(parent.left == '#') {
                        parent.left = null;
                    }
                    if(parent.right == '#'){
                        parent.right = null;
                    }
                }
            }
        }
    }
    return treeTop;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
