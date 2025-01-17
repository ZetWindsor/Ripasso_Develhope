`Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.`;

const person = { name: "John", age: 30 };

function fetchDataFromAPI(person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (person) {
        resolve({ name: person.name, age: person.age });
      } else {
        reject("error");
      }
    }, 1000);
  });
}

fetchDataFromAPI(person)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
