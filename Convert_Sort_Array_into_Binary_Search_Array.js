

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return returnBST(nums);

    function returnBST(array) {
        if (array.length === 1)
            return new TreeNode(array[0])
        if (array.length === 2) {
            var leftSub = array[0] < array[1] ? array[0] : array[1]
            var rootSub = array[0] > array[1] ? array[0] : array[1]
            return  new TreeNode(rootSub, new TreeNode(leftSub));

        }

        var root = Math.ceil(array.length / 2);

        var left = new returnBST(array.splice(0, root - 1));
        var right = new returnBST(array.splice(1, array.length));
        return new TreeNode(array[0], left, right);

    }

};
sortedArrayToBST([3, 5, 8]);