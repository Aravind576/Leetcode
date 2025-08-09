/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").at(-1).length
};
//at(-1) takes a lot of memory
lengthOfLastWord("Hello World")