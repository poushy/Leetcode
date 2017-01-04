/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    var newHead = null, curr = head,prev;
    while(curr != null) {
        var newNode = new RandomListNode(curr.label);
        if(prev) {
            prev.next = newNode;
        }
        else {
            newHead = newNode;
        }
        prev = newNode;
        curr = curr.next;
    }
    curr = head, newCurr = newHead;
    while(curr != null) {
        if(curr.random == null) {
            newCurr.random = null;
        }
        else {
            var curr1 = newHead, curr2 = head;
            while(curr1!= null) {
                if(curr2 == curr.random) {
                    newCurr.random = curr1;
                    break;
                }
                curr1 = curr1.next;
                curr2 = curr2.next;
            }
        }
        newCurr = newCurr.next;
        curr = curr.next;
    }
    return newHead;
};
