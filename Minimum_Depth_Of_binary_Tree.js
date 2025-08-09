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
var minDepth = function (root) {
    var lowest = 99999;
    if (!root) return 0
    function findLowest(tree, depth) {
        if (!tree) return;
        if (!tree?.left && !tree?.right) {
            lowest = lowest < depth ? lowest : depth;
        }
        findLowest(tree?.left, depth + 1)
        findLowest(tree?.right, depth + 1)
    }
    findLowest(root, 1)
    return lowest
};