/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const paranthesisMirror = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    var mirrorString = ""
    for (var i = 0; i < s.length; i++) {
        if (paranthesisMirror[s[i]])
            mirrorString = paranthesisMirror[s[i]] +  mirrorString;
        else
            if (s[i] === mirrorString[0])
                mirrorString = mirrorString.slice(1)
            else
                return false
    }
    return true
};
console.log(isValid("([])"))