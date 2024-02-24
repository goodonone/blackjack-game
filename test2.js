/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    nums1.length = m;
//  console.log("nums1 " +nums1);
    nums1 = nums1.concat(nums2);
    // console.log("nums1 again " +nums1);

    for (i = 0; i < nums1.length; i++) {
        if (nums1[i] > nums1[i + 1]) {
            nue = nums1[i+1];
            old = nums1[i];
            nums1[i+1] = old; 
            nums1[i] = nue;
        }
        else
        i++
    }
    return nums1;

}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
