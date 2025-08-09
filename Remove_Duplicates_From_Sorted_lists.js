
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
var deleteDuplicates = function (head) {
    var temp = head;
    while (head?.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next;
        }
    }
    return temp;

};
const a1 = new ListNode(1);
const a2 = new ListNode(1, a1);
const a3 = new ListNode(3, a2)
deleteDuplicates(a3)