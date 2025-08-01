/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let newSubString = s ? s[0] : "";
    for (var i = 1; i < s.length; i++) {
        if (newSubString.includes(s[i]) && newSubString.length !== 0) {
            newSubString = newSubString.slice(newSubString.indexOf(s[i]) + 1);
        }
        newSubString = newSubString + s.slice(i, i + 1);
        maxLength = maxLength > newSubString.length ? maxLength : newSubString.length;
    }
    return maxLength > newSubString.length ? maxLength : newSubString.length;
}
console.log(lengthOfLongestSubstring(" "));