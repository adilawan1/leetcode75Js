/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left=0;
    let right=0;
    while(right<nums.length){
        if(nums[right] === 0) k--;
        if(k < 0) {
            if(nums[left] === 0) k++;
            left++;
        }
        right++;  
    };
    return right-left;
}