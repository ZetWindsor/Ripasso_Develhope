// Esercizio 10: Somma dei numeri pari
// Testo dell'esercizio:
// Scrivi una funzione chiamata `sumEvenNumbers` che accetta un array di numeri e una callback.
// La funzione deve sommare solo i numeri pari dell'array e restituire il risultato tramite la callback.

function sumEvenNumbers(numbers, callback) {
  const even = numbers.filter((num) => num % 2 === 0);
  callback(even.reduce((a, num) => a + num, 0));
}

function printResult(result) {
  console.log(result);
}

// Test della funzione
sumEvenNumbers([1, 2, 3, 4, 5, 6, 7], printResult); // Dovresti ottenere 12 (2 + 4 + 6)
