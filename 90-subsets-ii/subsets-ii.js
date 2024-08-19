/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError("The input must be an array");
    }
    
    nums.sort((a, b) => a - b); 
    let result = [];
    let subset = [];

    function backtrack(start) {
        result.push([...subset]); 

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            subset.push(nums[i]); 
            backtrack(i + 1); 
            subset.pop(); 
        }
    }

    backtrack(0);  
    return result;
};