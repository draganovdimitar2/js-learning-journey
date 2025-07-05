// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 
// THESE SOLUTION AREN'T EFFICIENT IN TERMS OF COMPLEXITY
var sortColors = function(nums) {  // first approach
    for (let i = 0; i < nums.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j <  nums.length; j++) {
            if (nums[minIdx] > nums[j]) {
                minIdx = j;
            }
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];  // perform the swap
    }
    return nums;
};

var sortColors = function(nums) {   // second approach 
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <  nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));