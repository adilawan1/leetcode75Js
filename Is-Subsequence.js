/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let firstPointer=0
    let secondPointer=0
    const l1= s.length
    const l2=t.length

    while(firstPointer<l1&&secondPointer<l2)
    {
        if(s[firstPointer]==t[secondPointer])
        {
            firstPointer++;
            secondPointer++;
        }
        else
            secondPointer++;
    }
   
    return firstPointer===s.length
    
};