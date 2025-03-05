/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let lowNum=Infinity;
    let SecondNum=Infinity;

    for(let i of nums){
        if(lowNum>i)
        lowNum=i
        else if(SecondNum>i && i>lowNum)
        SecondNum=i
    }
    return false
};