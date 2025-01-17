// Esercizio 3: Moltiplicazione di due numeri
// Testo dell'esercizio:
// Scrivi una funzione chiamata `multiplyNumbers` che accetta due numeri e una callback. 
// La funzione deve moltiplicare i due numeri e poi passare il risultato alla callback per stamparlo.

function multiplyNumbers(num1, num2, callback) {
  const ciccio = num1*num2;
  callback(ciccio)
}

function printResult(result) {
  console.log(result);
}

// Test della funzione
multiplyNumbers(4, 2, printResult);
