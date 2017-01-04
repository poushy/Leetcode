/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var slow = head,fast = head, curr1 = head;
    while(fast!= null && fast.next!= null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    function reorder(curr, type) {
        if(curr == null) {
            return null;
        }
        reorder(curr.next, 'next');
        curr.next = curr1.next;
        curr1.next = curr;
        curr1 = curr1.next.next;
        if(type == 'first') {
            curr.next = null;
        }
    }
    
    reorder(slow, 'first');
};
