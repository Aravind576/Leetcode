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
//without using in built functions
var strStr = function (haystack, needle) {
    var hLen= haystack.length;
    var nLen = needle.length;
    
    if (hLen === 0 || nLen === 0 || nLen > hLen)
        return -1;
    if (hLen === nLen)
        return haystack === needle ? 0 : -1
    var i = 0;
    var j = 0;
    while (j < hLen) {
        if (haystack[j] === needle[0]) {
            var flag = false;
            while (i < nLen) {
                if (haystack[j + i] !== needle[i]) {
                    flag = true;

                }

                i++;
            }
            if (!flag) {
                return j
            }
            i = 0;
        }
        j++;
    }
    return -1
}
console.log(strStr("abc", "c"))