// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, 
// restituisca la posizione in cui si trova l'elemento all'interno dell'array; 
// se l'elemento non è presente nell'array, allora la funzione deve restituire -1


let numbOfElem;

do {
  numbOfElem = parseInt(prompt("Quanti elementi vuoi nell'array?"));
}while(isNaN(numbOfElem))

const myArray = fillArray(numbOfElem);


const elemToFind = prompt("Quale elemento vuoi cercare?");

const result = findElemIndex(myArray, elemToFind);
console.log(result);



