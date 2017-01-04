/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var prev = null, curr = head;
    while(curr != null) {
        if(curr.val == val) {
            if(prev == null) {
                head = curr.next;
            }
            else {
                prev.next = curr.next;
            }
            curr = curr.next;
        }
        else {
            if(prev == null) {
                prev = head;
            }
            else {
                prev = curr;
            }
            curr = curr.next;
        }
    }
    return head;
};
