/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max_avg=Number.NEGATIVE_INFINITY;
    let avg=0
    let sum=0
    for(let i=0;i<k;i++)
    {
        sum+=nums[i]
    }
    max_avg=sum/k
    for(let i=k; i<nums.length;i++)
    {
        sum = sum-nums[i-k]+nums[i]
        avg=sum/k
        max_avg=avg>max_avg?avg:max_avg  
    } 
    return max_avg
};