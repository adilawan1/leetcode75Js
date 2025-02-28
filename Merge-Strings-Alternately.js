/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
       let str = '';
    const longestWord = word1.length > word2.length ? word1 : word2;

    [...longestWord].forEach((_, i) => str = str + `${word1[i] ?? ''}${word2[i] ?? ''}`);
    return str; 
};