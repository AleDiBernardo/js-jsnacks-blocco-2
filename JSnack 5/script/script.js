// scrivere una funzione stampa() che, dato un array in input, 
// restituisca una stringa contenente tutti gli elementi dell'array, 
// separati da una virgola


let numbOfElem;

do {
  numbOfElem = parseInt(prompt("Quanti elementi vuoi nell'array?"));
}while(isNaN(numbOfElem))

const myArray = fillArray(numbOfElem);
const stringElems = printArray(myArray);

alert(`Stringa degli elementi:\n${stringElems}`);


