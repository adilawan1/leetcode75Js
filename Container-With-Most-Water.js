/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len=height.length
    const Area = (l1,l2)=>{
        return l1*l2
    }
    let area=0;
    let left=0;
    let right=len-1
    while(left<right)
    {
        length=right-left;
        if(height[left]<height[right])
        {
        area=Math.max(Area(length,height[left]),area)
        left++
        }
        else {
        area=Math.max(Area(length,height[right]),area)
        right--
        }
        }
    return area
};