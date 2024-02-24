/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    for(let i = 0; i < m; i++){
        const removeZeroes: number[] = [];
        if (removeZeroes[i] in nums2){
            nums2.includes(removeZeroes[i])
            nums2.pop()
        }
        

    nums1 = removeZeroes + nums2
    return(nums1)    

    }
        

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)