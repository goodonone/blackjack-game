function removeDuplicates(nums: number[]) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length-1; j++)
            if (nums[i] == nums[j]) {
                nums.indexOf(nums[j])
                nums.slice(j, 1)

            }
            else{
                j++
            }

    }

    console.log(nums);


};

removeDuplicates([1, 1, 2]);