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
    array[i] = prompt(`Elemento numero ${i + 1}`);
  }

  return array;
}

function printArray(array) {
  let stringElem = "";
  for (let i = 0; i < array.length; i++) {
    if (array.length - i === 1) {
      stringElem += `${array[i]} `;
    } else {
      stringElem += `${array[i]}, `;
    }

  }

  return stringElem;
}
