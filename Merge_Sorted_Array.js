/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var i = 0;
    var j = 0;
    if (n === 0) { }
    else
        while (j < n) {
            if (nums1[i] === 0 && i > j + m - 1) {
                nums1.splice(i, 0, nums2[j]);
                nums1.pop();
                j++
            }
            else if (nums1[i] > nums2[j]) {
                nums1.splice(i, 0, nums2[j]);
                nums1.pop();
                j++
            }
            i++
        }

};
merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6);