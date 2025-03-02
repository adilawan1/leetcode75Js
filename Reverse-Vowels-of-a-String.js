/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
const v=s.match(/[aeiou]/gi);
return s.replace(/[aeiou]/gi,e=>v.pop())
};