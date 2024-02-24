class Solution(object):
    def merge(self, nums1, m, nums2, n):

        removeZeroes = self[0:m]

        for index in range(len(removeZeroes)):
            if removeZeroes[index] in nums2:
                nums2.remove(removeZeroes[index])

        nums1 = removeZeroes + nums2
        return(nums1)

nums1 = []
self = [1,2,3,0,0,0]
nums2 = [2,5,6]
m = 3
n = 3

ret = Solution().merge(self, m, nums2, n)
print(ret)



