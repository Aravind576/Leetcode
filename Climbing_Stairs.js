/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    var output = 0
    findPrevious(n);
    return output;
    function findPrevious(x) {
        if (x === 0)
            output++
        if (x > 0) {
            findPrevious(x - 1);
            findPrevious(x - 2);
        }
    }
};

console.log(climbStairs(45))