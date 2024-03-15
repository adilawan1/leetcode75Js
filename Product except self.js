// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [];
  let right = [];
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left.push(1 * nums[i]);
    else left.push(nums[i] * left[i - 1]);

    if (left[i] === 0) left[i] = 0;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) right.push(1 * nums[i]);
    else {
      right.unshift(nums[i] * right[0]);
    }
    if (right[0] === -0) right[0] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) final.push(right[i + 1]);
    else if (i === nums.length - 1) final.push(left[i - 1]);
    else final.push(left[i - 1] * right[i + 1]);
  }
  return final;
};
