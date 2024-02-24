/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    for(i=0; i<m; i++){
        if(nums2.includes(nums1[i]))
        {
            const index = nums2.indexOf(nums1[i])
            nums2.splice(index,1)
        }
    }
    
    nums1.length = m;
    nums1 = nums1.concat(nums2)
    
    return nums1;
        
    };
    
    nums1 = [1,2,3,0,0]
    nums2 = [2,5,6]
    m=3;
    n=2;
    console.log(merge(nums1, m, nums2, n));

    