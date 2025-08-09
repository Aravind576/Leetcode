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
var inorderTraversal = function (root) {
    var output = [];
    output = findLeftMost(root)
    function findLeftMost(x) {
        var temp = []
        if (x == null)
            return x;
        var tempLeft = findLeftMost(x?.left)
        tempLeft ? temp.push(...tempLeft) : null;
        temp.push(x.val);
        var tempRight = findLeftMost(x?.right)
        tempRight ? temp.push(...tempRight) : null;
        return temp;
    }
    return output ? output : []
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
inorderTraversal(root)