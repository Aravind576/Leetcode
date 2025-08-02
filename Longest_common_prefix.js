/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1 || strs.length === 0)
        return strs[0]
    var len = strs.length;
    var i = 0;
    for (i = 0; i < strs[0].length; i++) {
        var temp = strs.filter((ele) => ele[i] === strs[0][i])
        if (temp.length !== len && i === 0)
            return ""
        else if (temp.length !== len)
            return strs[0].substring(0, i);
    }
    return strs[0]
};
console.log(longestCommonPrefix(["a","b"]))