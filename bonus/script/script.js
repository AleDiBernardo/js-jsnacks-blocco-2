// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento
// E in input, resituisca un nuovo array B, con E in prima posizione e a 
// seguire tutti gli elementi di A

let numbOfElem;
let E;

do {
  numbOfElem = parseInt(prompt("Quanti elementi vuoi nell'array?"));
  
} while (isNaN(numbOfElem));

do {
  E = prompt("Elemento da inserire");
}while(E === 0 || E === "")

const myArray = fillArray(numbOfElem);
const formattedMyArray = printArray(myArray);

const arrayB = addElementToHead(myArray, E);
const formattedArrayB = printArray(arrayB);


alert(`ArrayA: ${formattedMyArray}\nArrayB: ${formattedArrayB}`);
