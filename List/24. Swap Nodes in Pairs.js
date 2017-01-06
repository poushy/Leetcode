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
var swapPairs = function(head) {
    function swap(prev,curr) {
       if(curr == null || curr.next == null) {
           return;
       }
       var node1 = curr, node2 = curr.next, tempNext = curr.next.next;
       if(prev == null) {
           head = node2;
       }
       else {
           prev.next = node2;
       }
       node2.next = node1;
       node1.next = tempNext;
       
       swap(node1,tempNext);
    }
    swap(null, head);
    return head;
};
