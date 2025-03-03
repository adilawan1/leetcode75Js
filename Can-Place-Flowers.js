/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n<=0) return true
    for(let i=0; i<flowerbed.length ; i++){
        if(i==0 && (flowerbed[i+1]==0||i+1>=flowerbed.length) && flowerbed[i]==0)
        {
            flowerbed[i]=1
            n=n-1;
        }
        else if(flowerbed[i+1]==0&&flowerbed[i]==0&&flowerbed[i-1]==0)
        {
            flowerbed[i]=1
            n=n-1;
        }
        else if(i==flowerbed.length-1&&flowerbed[i]==0&&flowerbed[i-1]==0)
        {
            flowerbed[i]=1
            n=n-1;
        }

    }

    return n<=0
};