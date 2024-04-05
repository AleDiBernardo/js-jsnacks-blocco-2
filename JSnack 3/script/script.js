// scrivere una funzione contaElementi() che, dato un array in input, 
// restituisca il numero di elementi presenti nell'array


let numbOfElem;

do {
  numbOfElem = parseInt(prompt("Quanti elementi vuoi nell'array?"));
}while(isNaN(numbOfElem))


const myArray = fillArray(numbOfElem);
const elemNum = countArrayElems(myArray);

alert(`Array: [${myArray}]\nNumero di elementi: ${elemNum}`);