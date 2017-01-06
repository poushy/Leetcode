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
    var tempHeadA = headA, tempHeadB = headB,count = 0;
    while(tempHeadA && tempHeadA.next !== null) {
        tempHeadA = tempHeadA.next;
        count++;
    }
    while(tempHeadB && tempHeadB.next !== null) {
        tempHeadB = tempHeadB.next;
        count--;
    }
    tempHeadB = headB, tempHeadA = headA;
    if(count != 0){
        if(count < 0) {
            
            while(count < 0) {
                tempHeadB = tempHeadB.next;
                count++;
            }
        }
        else {
            while(count > 0) {
                tempHeadA = tempHeadA.next;
                count--;
            }
        }
    }
    while(tempHeadA!== null && tempHeadB !== null) {
        if(tempHeadA == tempHeadB) {
            return tempHeadA
        }
        else {
            tempHeadA = tempHeadA.next;
            tempHeadB = tempHeadB.next;
        }
    }
    return null;
};
