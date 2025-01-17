// Esercizio 9: Filtra numeri in base a un criterio
// Testo dell'esercizio:
// Scrivi una funzione chiamata `filterNumbers` che accetta un array di numeri e una callback.
// La funzione deve filtrare i numeri nell'array in base a un criterio definito dalla callback e restituire un nuovo array con i numeri che soddisfano il criterio.

function filterNumbers(numbers, callback) {
  return numbers.filter((num) => callback(num));
}

function isEven(num) {
  return num % 2 === 0;
}

// Test della funzione
const result = filterNumbers([1, 2, 3, 4, 5, 6], isEven);
console.log(result); // Dovresti ottenere [2, 4, 6]
