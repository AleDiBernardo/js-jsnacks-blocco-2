// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input,
// restituisca un nuovo array B, con tutti gli elementi
// dell'array A, tranne l'ultimo

let numbOfElem;

do {
  numbOfElem = parseInt(prompt("Quanti elementi vuoi nell'array?"));
} while (isNaN(numbOfElem));

const myArray = fillArray(numbOfElem);
const formattedMyArray = printArray(myArray);

const arrayB = removeFromArrayTail(myArray);
const formattedArrayB = printArray(arrayB);


alert(`ArrayA: ${formattedMyArray}\nArrayB: ${formattedArrayB}`);
