
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Test case: [1, null, 2, 3]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var isSameTree = function (p, q) {
    return isSame(p, q)
    function isSame(x, y) {
        if (x?.val === y?.val & x === null)
            return true
        if (x?.val !== y?.val)
            return false
        var left = isSame(x?.left, y?.left)
        var right = isSame(x?.right, y?.right)
        return left && right;
    }
};
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.left = new TreeNode(3);
isSameTree(root, root)