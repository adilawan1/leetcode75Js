/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!==str2+str1)
    return ""
    let str_max=str1.length
    let str_min=str2.length
    while(str_min)
    {
        [str_max,str_min]=[str_min,str_max%str_min]
    }
    return str1.slice(0,str_max)
     
};