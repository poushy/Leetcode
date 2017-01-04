/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var cur1 = l1, cur2 = l2, length1 = 0, length2 = 0, sum;
    
    while(cur1 != null) {
        cur1 = cur1.next;
        length1++;
    }
     while(cur2 != null) {
        cur2 = cur2.next;
        length2++;
    }

    if(length1 != length2){
        var newHead, currTail;
        var diff = length2 > length1 ? length2 - length1 : length1 - length2; 
        while(diff != 0) {
            var node = new ListNode(0);
            if(!newHead) {
                newHead = node;
                currTail = node;
            }
            else {
                currTail.next = node;
                currTail = node;
            }
            diff--;
        }
        
        length2 > length1 ? (currTail.next = l1, l1 = newHead) : (currTail.next = l2, l2 = newHead);
    }
    var node1 = new ListNode(0), node2 = new ListNode(0);
    node1.next = l1;l1 = node1;
    node2.next = l2; l2 = node2;
    
    function doAdd(num1, num2) {
        var carry = 0, sum;
        if(num1 == null && num2 == null) {
            return [0,null];
        }
        var ret = doAdd(num1.next, num2.next);
        sum = num1.val + num2.val + ret[0];
        if(sum > 9) {
            carry = 1,sum = sum - 10;
        }
        var newNode = new ListNode(sum);
        newNode.next = ret[1];
        return [carry,newNode];
    }
    
    var ret =  doAdd(l1,l2);
    if(ret[1].val == 0 ) ret[1] = ret[1].next;
    return ret[1];
};
