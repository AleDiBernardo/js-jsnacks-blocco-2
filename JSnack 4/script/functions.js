/**
 * Fill array with user input
 * @date 4/5/2024 - 2:32:39 PM
 *
 * @param {*} numbOfElem
 * @returns {{}}
 */
function fillArray(numbOfElem) {

  let array = [];

  for (let i = 0; i < numbOfElem; i++) {
    array[i] = prompt(`Elemento numero ${i+1}`);
  }

  return array
}


/**
 * Return index of searched elem if exist
 * @date 4/5/2024 - 2:47:48 PM
 *
 * @param {array} array
 * @param {number} elemToFind
 * @returns {number}
 */
function findElemIndex(array, elemToFind) {

  for (let i = 0; i < array.length; i++) {
    if (elemToFind === array[i]) {
      return alert(`Elemento trovato in posizione ${i}`);
    }
  }

  return -1;
}