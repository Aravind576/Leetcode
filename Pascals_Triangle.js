/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let output = [[1]]
    if (numRows === 1)
        return output;
    output = [[1], [1, 1]]
    if (output === 2)
        return output;
    for (var i = 2; i < numRows; i++) {
        output[i] = [1];
        for (let j = 1; j < i; j++) {
            output[i].push(output[i - 1][j] + output[i - 1][j - 1])
        }
          output[i].push(1);
    }
    return output;
}
console.log(generate(5))