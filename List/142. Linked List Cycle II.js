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
var detectCycle = function(head) {
    var slow = head, fast = head, temp = head, curr;
    while(1) {
        if(slow == null || slow.next == null || fast == null || fast.next == null || fast.next.next == null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            curr = slow;
            break;
        }
    }
    while(temp != curr) {
        temp = temp.next;
        curr = curr.next;
    }
    return curr;
};
