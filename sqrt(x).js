/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    debugger
    var closest = Math.ceil(x);
    var min = 1;
    var max = Math.floor(x / 2);
    if (x === 0 || x === 1)
        return x
    var mid = Math.floor((max + min) / 2)
    while (min < max) {
        var pro = mid * mid;
        if (pro === closest) {
            if (closest > x)
                return mid - 1;
            else
                return mid
        }
        else if (pro > closest) {
            max = mid;
        }
        else {
            min = mid;
        }
        mid = Math.floor((max + min) / 2)
        if (min + 1 === max || min === mid)
            if (min * min < closest && closest < max * max)
                return min
            else
                return max
    }
};
mySqrt(4);