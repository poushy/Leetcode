/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr = null, currA = headA, currB = headB, stack1 = [], stack2 = [];
    while(currA) {
        stack1.push(currA);
        currA = currA.next;
    }
    while(currB) {
        stack2.push(currB);
        currB = currB.next;
    }
    while(stack1.length > 0) {
        const curr1 = stack1.pop();
        const curr2 = stack2.pop();
        if (curr1 != curr2) {
            break;
        }
        curr = curr1;
    }
    return curr;
};
