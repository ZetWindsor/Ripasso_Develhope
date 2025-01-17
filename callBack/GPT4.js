// Esercizio 6: Somma di un array di numeri
// Testo dell'esercizio:
// Scrivi una funzione chiamata `sumArray` che accetta un array di numeri e una callback.
// La funzione deve sommare tutti i numeri nell'array e passare il risultato alla callback per stamparlo.

function sumArray(numbers, callback) {
  const sum = numbers.reduce((a, num) => a + num, 0);

  callback(sum);
}

function printResult(result) {
  console.log(result);
}

// Test della funzione
sumArray([1, 2, 3, 4, 5], printResult);
