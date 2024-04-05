/**
 * Check if word are equal
 * @date 4/5/2024 - 12:32:23 PM
 *
 * @param {*} word1
 * @param {*} word2
 * @returns {boolean}
 */
function isLenghtEqual(word1, word2) {
  let result = false;

  if (word1.length === word2.length) {
    result = true;
  }

  return result;
}

function printWord(result, word1, word2) {
  if (result) {
    alert(`Word1: ${word1}\nWord2: ${word2}`);
  } else if (word1.length > word2.length) {
    alert(`Word1: ${word1}`);
  } else {
    alert(`Word2: ${word2}`);
  }
}
