/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const len=nums.length
    const count= new Map()
    let operations=0
    for (let i=0; i<len; i++){
    let complement = k - nums[i];

    if (count.has(complement) && count.get(complement) > 0) {
      operations += 1;
      count.set(complement, count.get(complement) - 1);
    } else {
      count.set(nums[i], (count.get(nums[i]) || 0) + 1);
    }
    }
    
    return operations
};