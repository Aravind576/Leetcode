/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    var flen = fruits.length - 1
    var blen = flen;
    var reminder = 0;
    var i = 0, j = 0;
    while (i <= flen) {
        let flag = 1;
        while (j <= blen) {
            if (baskets[j] - fruits[i] >= 0) {
                baskets[j] = 0;
                flag = 0
                break;
            }
            j++;

        }
        reminder += flag;
        j = 0;
        i++;
    }
    return reminder
};

numOfUnplacedFruits([8, 5], [1, 8])