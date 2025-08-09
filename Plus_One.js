/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length - 1

    for (var i = len; i >= 0; i--) {
        let carry = ((digits[i] + 1) / 10)< 1 ? 0 : 1
        digits[i] = (digits[i] + 1) % 10
        if (!carry)
            return digits
    }

    digits = [1, ...digits]
    return digits
};