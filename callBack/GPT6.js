// Esercizio 8: Trova il numero massimo e verifica se è maggiore o minore di 10
// Testo dell'esercizio:
// Scrivi una funzione chiamata `findMax` che accetta un array di numeri e una callback.
// La funzione deve trovare il numero massimo nell'array e passarlo alla callback,
// che dovrà restituire una stringa indicando se il massimo è maggiore o minore di 10.

function findMax(numbers, callback) {
  const max = Math.max(...numbers);
  return callback(max)
}

function checkMax(num) {
  if (num > 10) {
    return `Il massimo è maggiore di 10: ${num}`;
  } else {
    return `Il massimo è minore o uguale a 10: ${num}`;
  }
}

// Test della funzione
const result = findMax([3, 5, 7, 11, 9], checkMax);
console.log(result); // Dovresti ottenere "Il massimo è maggiore di 10: 11"
