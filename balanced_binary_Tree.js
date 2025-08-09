class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
var isBalanced = function (root) {
    var flag = true;
    function balancedCheck(list, down) {
        if (!list)
            return 0;
        down++;

        var left = down;
        var right = down;
        if (list?.left === null && list?.right === null)
            return down;

        if (list?.left)
            left = -1 * balancedCheck(list?.left, down)
        else
            left = -1 * left
        if (list?.right)
            right = balancedCheck(list?.right, down)

        if (Math.abs(left + right) > 1)
            flag = false


        return (left * -1) > right ? (left * -1) : right
    }
    balancedCheck(root, 0)
    return flag
};
// const tree = new TreeNode(1,
//     new TreeNode(2,
//         new TreeNode(3,
//             new TreeNode(4),
//             new TreeNode(4)
//         ),
//         new TreeNode(3)
//     ),
//     new TreeNode(2)
// );
const tree = new TreeNode(1, null, new TreeNode(2));
isBalanced(tree)
