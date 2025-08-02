
//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    var output = new ListNode(-1);
    var temp = output;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    temp.next = list1 === null ? list2 : list1
};
var list1 = new ListNode(1)
list1.next = new ListNode(2);
var list2 = new ListNode(1)
list2.next = new ListNode(3);
mergeTwoLists(list1, list2);