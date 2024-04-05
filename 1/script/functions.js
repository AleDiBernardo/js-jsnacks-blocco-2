

/**
 * Create N array
 * @date 4/5/2024 - 11:36:33 AM
 *
 * @param {number} numOfArray
 */
function createArray(numOfArray) {
    let array = [];
    for (let i = 0; i < numOfArray; i++) {
        array[i] = fillArray(array);
    }
}

/**
 * Fill the array with 10 random number
 * @date 4/5/2024 - 11:36:43 AM
 *
 * @param {number} array
 */
function fillArray(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = randNum();
    }

    console.log(array);
}

/**
 * Generate rand numbers
 * @date 4/5/2024 - 11:36:55 AM
 *
 * @returns {number}
 */
function randNum() {
    return Math.floor(Math.random() * 100) + 1;
}