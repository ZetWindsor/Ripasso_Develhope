// Esercizio 1: Saluta una persona
// Testo dell'esercizio:
// Scrivi una funzione chiamata `greet` che accetta un nome e una callback. La callback dovrebbe aggiungere "Hello" al nome e stampare il saluto.

function greet(name, callback) {
callback(name);
}

function sayHello(name) {
  console.log("hello", name);
}

greet("John", sayHello); // Output: Hello, John!
