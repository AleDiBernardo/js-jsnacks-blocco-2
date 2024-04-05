

function createArray(numOfArray) {
    let array = [];
    for (let i = 0; i < numOfArray; i++) {
        array[i] = fillArray(array);
    }
}

function fillArray(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = randNum();
    }

    console.log(array);
}

function randNum() {
    return Math.floor(Math.random() * 100) + 1;
}