/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let firstPointer=0
    let secondPointer=0

    while(firstPointer<s.length&&secondPointer<t.length)
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