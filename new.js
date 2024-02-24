/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // console.log(nums);
    // expectedNums = [];

while(nums.includes(val))
{
    const index = nums.indexOf(val)
    nums.splice(index, 1);
}

return nums;

};

let k = removeElement([3, 2, 2, 3], 3);
console.log(k);