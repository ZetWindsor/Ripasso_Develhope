// Esercizio 7: Applicare una callback a ogni numero in un array
// Testo dell'esercizio:
// Scrivi una funzione chiamata `processNumbers` che accetta un array di numeri e una callback.
// La funzione deve applicare la callback a ogni numero dell'array e restituire un nuovo array con i risultati.

function processNumbers(numbers, callback) {
  return numbers.map((num) => callback(num));
}

function doubleNumber(num) {
  return num * 2;
}

// Test della funzione
const result = processNumbers([1, 2, 3, 4], doubleNumber);
console.log(result); // Dovresti ottenere [2, 4, 6, 8]
