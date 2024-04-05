/**
 * Returns the number of elements of an array
 * @date 4/5/2024 - 2:23:51 PM
 *
 * @param {*} array
 * @returns {number}
 */
function countArrayElems (array) {

  let numOfElem = 0;

  for (let i = 0; i < array.length; i++) {
    numOfElem++;
  }

  return numOfElem;
}


/**
 * Fill array
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

