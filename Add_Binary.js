/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var aLen = a.length - 1, bLen = b.length - 1;
    var output = "";
    var carry = "0";
    for (var i = aLen, j = bLen; (a[i] || b[j]) || carry === "1"; i--, j--) {
        if (!a[i]) {
            i = 0;
            a = "00"
        } if (!b[j]) {
            j = 0;
            b = "00"
        }

        if (a[i] === b[j]) {
            output = carry + output;
            if (a[i] === "1")
                carry = "1"
            else
                carry = "0"
        }
        else {
            if (carry === "0")
                output = "1" + output
            else
                output = "0" + output

        }
    }
    return output
}
addBinary("100", "110010")