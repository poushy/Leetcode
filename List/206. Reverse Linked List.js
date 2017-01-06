/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    function reverse(curr, prev) {
        if(curr == null) {
            return;
        }
        reverse(curr.next, curr);
        if(curr.next == null) {
            head = curr;
        }
        curr.next = prev;

        
    }
    reverse(head,null);
    return head;
};
