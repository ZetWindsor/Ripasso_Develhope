// Esercizio 12: Applica IVA a ogni prezzo
// Testo dell'esercizio:
// Scrivi una funzione chiamata `applyVAT` che accetta un array di prezzi e una callback. 
// La funzione deve applicare l'IVA (20%) a ogni prezzo dell'array e poi passare l'array modificato alla callback per stampare i prezzi con IVA.

function applyVAT(prices, callback) {
  const pricesWithVAT = prices.map((prezzo) => prezzo + (prezzo * 0.2)); // 20% di IVA
  callback(pricesWithVAT);
}

function printPrices(prices) {
  console.log(prices);  // La callback stampa i prezzi con IVA
}

// Test della funzione
const prices = [100, 200, 300, 400];
applyVAT(prices, printPrices);  // Dovresti ottenere i prezzi con l'IVA applicata
