/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    var min = 0;
    var max = nums.length - 1;
    var lengthHalf = Math.round(max / 2) + min;;
    
    if (nums[0] >= target)
        return 0
    else if (nums[nums.length - 1] < target)
        return nums.length
    else if (nums[nums.length - 1] === target)
        return nums.length - 1

    while (nums[min] < target < nums[max] && min + 1 != max) {
        
        if (nums[lengthHalf] === target) {
            return lengthHalf
        }
        if (target > nums[lengthHalf]) {
            min = lengthHalf
        } else {
            max = lengthHalf
        }
        lengthHalf = Math.round((max + min) / 2);
    }

    return lengthHalf;
};