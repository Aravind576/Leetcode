/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.includes(needle))
        return -1
    var output = haystack.split(needle);
    return output[0].length
};
// haystack =
// "leetcode"
// needle =
// "leeto"