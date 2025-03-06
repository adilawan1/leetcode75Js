/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
   let index=0;
   let n=chars.length;
   for (let i=0; i<chars.length;i++){
    let char=chars[i]
    let count=0;
    while(i<n && chars[i]==char)
    {
        count++;
        i++;
    }
    if(count==1)
    {
        chars[index++]=char
    }
    else    {
        chars[index++]=char
        for (let digit of count.toString()) {
                chars[index++] = digit;
            }
    }
    i--;
   }
   chars.length=index
   return index;
};