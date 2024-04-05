// Esercizio 1:
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


let num;
do {
  num = parseInt(prompt("Inserisci un numero"));
} while (isNaN(num));

console.log(createArray(num));


