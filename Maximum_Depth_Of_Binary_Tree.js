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
 * @return {number}
 */
var maxDepth = function (root) {
    var highest = 0;
    findDepth(root, 0)
    function findDepth(x, down) {
        if (x === null) {
            highest = highest > down ? highest : down;
            return
        }
        findDepth(x?.left, down + 1);
        findDepth(x?.right, down + 1);
    }
    return highest
};
