/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i = 1; len = nums.length;
    for (var j = 1; j < len; j++) {
        if (nums[j]!==nums[j-1]) {
            nums[i] = nums[j];
            i++
        }
    }
    return i;
};
console.log(removeDuplicates([1, 1, 2]))