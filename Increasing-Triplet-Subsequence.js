/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
       if(nums.length >= 3){
    let lowNum=Infinity;
    let SecondNum=Infinity;
    for(let i of nums){
                
        if(i>lowNum && i>SecondNum)
        return true
        
        if(lowNum>i)
        lowNum=i
        else if(SecondNum>i && i>lowNum)
        SecondNum=i
    }
       }
    return false
};