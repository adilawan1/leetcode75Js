/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let p1=0
    let p2=0
    const l=nums.length
    while(p2<l)
    {
        //if both the indexes are non-zero
        if(nums[p1]!=0 && nums[p2]!=0){
            p1++
            p2++
        }

        //if first pointer is zero
        if(nums[p1]==0){
            if(nums[p2]==0)
            p2++;
            else{
                nums[p1]=nums[p2]
                nums[p2]=0
                p1++
            }
        }
    }
};