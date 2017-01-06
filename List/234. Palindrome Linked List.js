/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var first = head, pal  = true;
    function findPalindrome(curr) {
        if(curr == null) {
            return;
        }
        findPalindrome(curr.next);
        if(first.val != curr.val) {
           pal = false;
           return;
        }
        first = first.next;
    }
    
    findPalindrome(head);
    return pal;
};
