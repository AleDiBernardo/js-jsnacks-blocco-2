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
    do{
      array[i] = prompt(`Elemento numero ${i + 1}`);
    } while (array[i] === "")
  }

  return array;
}


/**
 * Print array in formatted way
 * @date 4/5/2024 - 3:37:47 PM
 *
 * @param {array} array
 * @returns {string}
 */
function printArray(array) {
  let stringElem = "";
  for (let i = 0; i < array.length; i++) {
    if (array.length - i === 1) {
      stringElem += `${array[i]}`;
    } else {
      stringElem += `${array[i]},`;
    }
  }

  return stringElem = `[${stringElem}]`;
}

/**
 * Remove last element
 * @date 4/5/2024 - 3:38:40 PM
 *
 * @param {array} array
 * @returns {{}}
 */
function removeFromArrayTail(array) {

  const arrayB = [];
  for (let i = 0; i < array.length - 1; i++) {
    
    arrayB[i] = array[i];
  }

  return arrayB;

}
