// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");


const result =isLenghtEqual(word1, word2);

if(result) {
  alert(`Word1: ${word1}\nWord2: ${word2}`);
} else if(word1.length > word2.length) {
  alert(`Word1: ${word1}`);
} else {
  alert(`Word2: ${word2}`);
}