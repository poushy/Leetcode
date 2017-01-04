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
var oddEvenList = function(head) {
    function sortNow(odd, even, curr, isOdd) {
        if(curr == null) {
            console.log('done');
            odd.next = evenTop;
            even.next = null;
            return;
        }
        if(isOdd){
            odd.next = curr;
            odd = curr;
        }
        else {
            even.next = curr;
            even = curr;
        }
        sortNow(odd, even, curr.next, !isOdd);
    }
    if(head != null && head.next != null && head.next.next != null) {
        var evenTop = head.next;
        sortNow(head, head.next, head.next.next, true);
    }
    return head;
};
