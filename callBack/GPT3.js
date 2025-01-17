// Esercizio 5: Verifica se un numero è pari o dispari
// Testo dell'esercizio:
// Scrivi una funzione chiamata `checkEvenOdd` che accetta un numero e una callback.
// La funzione deve verificare se il numero è pari o dispari e passare una stringa "pari" o "dispari" alla callback per stamparlo.

function checkEvenOdd(num, callback) {
  if (num % 2 === 0) {
    callback("pari");
  } else {
    callback("dispari");
  }
}

function printResult(result) {
  console.log(result);
}

// Test della funzione
checkEvenOdd(7, printResult);
