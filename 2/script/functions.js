/**
 * Check if word are equal
 * @date 4/5/2024 - 12:32:23 PM
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
function isLenghtEqual(word1, word2) {

  return word1.length === word2.length;
}

/**
 * Print all word if equal else the longest
 * @date 4/5/2024 - 12:34:39 PM
 *
 * @param {boolean} result
 * @param {string} word1
 * @param {string} word2
 */
function printWord(result, word1, word2) {
  if (result) {
    alert(`Word1: ${word1}\nWord2: ${word2}`);
  } else if (word1.length > word2.length) {
    alert(`Word1: ${word1}`);
  } else {
    alert(`Word2: ${word2}`);
  }
}
