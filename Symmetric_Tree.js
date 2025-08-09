/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isSame(root?.left, root?.right)
    function isSame(x, y) {
        if (x?.val === y?.val & x === null)
            return true
        if (x?.val !== y?.val)
            return false
        var left = isSame(x?.left, y?.right)
        var right = isSame(x?.right, y?.left)
        return left && right;
    }
};