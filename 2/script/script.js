// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
let word1, word2;

do {
  word1 = prompt("Inserisci la prima parola");
  word2 = prompt("Inserisci la seconda parola");
} while (word1 === "" || word2 === "");

const result = isLenghtEqual(word1, word2);

printWord(result, word1, word2);
